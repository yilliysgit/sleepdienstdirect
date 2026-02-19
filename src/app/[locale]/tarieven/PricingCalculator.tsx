'use client';

import { useMemo, useState } from 'react';
import { Calculator, ArrowRight, Phone } from '@phosphor-icons/react';

type VehicleType = 'auto' | 'l1' | 'busje';
type TimeOfDay = 'dag' | 'nacht';

const RATES = {
  start: { dag: 80, nacht: 130 },            // starttarief binnen A’dam
  perKm: 1.0,                                 // per km sleepkosten
  vehicleMultiplier: { auto: 1.0, l1: 1.08, busje: 1.15 },
  extras: {
    lierwerk: 25,                             // winch/lier
    wachtPer15: 15,                           // per 15 min wacht
    sleutelsKwijt: 20,                        // extra handeling
  },
  btw: 0.21,
};

export default function PricingCalculator() {
  const [vehicle, setVehicle] = useState<VehicleType>('auto');
  const [time, setTime] = useState<TimeOfDay>('dag');
  const [distance, setDistance] = useState<number>(10); // km
  const [waiting15, setWaiting15] = useState<number>(0);
  const [lier, setLier] = useState<boolean>(false);
  const [keys, setKeys] = useState<boolean>(false);
  const [insideAmsterdam, setInsideAmsterdam] = useState<boolean>(true);

  const calc = useMemo(() => {
    const base = insideAmsterdam ? RATES.start[time] : 0; // buiten A’dam geen start? laat desnoods op 0 staan
    const kmCost = distance * RATES.perKm;
    const vehicleFactor = RATES.vehicleMultiplier[vehicle];

    let extras = 0;
    if (lier) extras += RATES.extras.lierwerk;
    if (keys) extras += RATES.extras.sleutelsKwijt;
    if (waiting15 > 0) extras += waiting15 * RATES.extras.wachtPer15;

    const subtotal = (base + kmCost + extras) * vehicleFactor;
    const btw = subtotal * RATES.btw;
    const total = subtotal + btw;

    return {
      base: round(base),
      kmCost: round(kmCost),
      extras: round(extras),
      vehicleFactor,
      subtotal: round(subtotal),
      btw: round(btw),
      total: round(total),
    };
  }, [vehicle, time, distance, waiting15, lier, keys, insideAmsterdam]);

  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-extrabold text-gray-900">Prijsindicatie berekenen</h2>
          </div>
          <p className="mt-1 text-sm text-gray-600">Krijg direct een nette indicatie. We bevestigen de definitieve prijs telefonisch.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {/* Inputs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="text-sm font-medium text-gray-700">Voertuig</label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {([
                    { key: 'auto', label: 'Auto' },
                    { key: 'l1', label: 'Mini busje (L1)' },
                    { key: 'busje', label: 'Bestelbus' },
                  ] as const).map(v => (
                    <button
                      key={v.key}
                      onClick={() => setVehicle(v.key)}
                      className={`px-3 py-2 rounded-lg border text-sm ${vehicle===v.key?'border-orange-500 bg-orange-50 text-orange-700':'border-gray-200 bg-white text-gray-700'}`}>
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Moment</label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {(['dag','nacht'] as const).map(t => (
                    <button key={t} onClick={() => setTime(t)}
                      className={`px-3 py-2 rounded-lg border text-sm ${time===t?'border-orange-500 bg-orange-50 text-orange-700':'border-gray-200 bg-white text-gray-700'}`}>
                      {t==='dag'?'Dag':'Nacht'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Binnen Amsterdam?</label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {[{k:true,l:'Ja'},{k:false,l:'Nee'}].map(o=>(
                    <button key={String(o.k)} onClick={()=>setInsideAmsterdam(o.k)}
                      className={`px-3 py-2 rounded-lg border text-sm ${insideAmsterdam===o.k?'border-orange-500 bg-orange-50 text-orange-700':'border-gray-200 bg-white text-gray-700'}`}>
                      {o.l}
                    </button>
                  ))}
                </div>
              </div>

              <div className="col-span-2">
                <label className="text-sm font-medium text-gray-700">Afstand (km)</label>
                <input type="number" min={0} step={1} value={distance}
                  onChange={(e)=>setDistance(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Bijv. 12" />
                <p className="text-xs text-gray-500 mt-1">Schatting van ophaalpunt naar afleverlocatie.</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Wachttijd (x 15 min)</label>
                <input type="number" min={0} step={1} value={waiting15}
                  onChange={(e)=>setWaiting15(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500" />
              </div>

              <div className="flex items-center gap-3">
                <input id="lier" type="checkbox" checked={lier} onChange={e=>setLier(e.target.checked)}
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                <label htmlFor="lier" className="text-sm text-gray-700">Lierwerk nodig</label>
              </div>

              <div className="flex items-center gap-3">
                <input id="keys" type="checkbox" checked={keys} onChange={e=>setKeys(e.target.checked)}
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                <label htmlFor="keys" className="text-sm text-gray-700">Sleutels niet aanwezig</label>
              </div>
            </div>

            {/* Resultaat */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-lg font-black text-gray-900">Samenvatting</h3>
              <dl className="mt-3 space-y-2 text-sm">
                <Row k="Starttarief" v={insideAmsterdam ? euro(calc.base) : '—'} />
                <Row k="Kilometers"   v={`${distance} km × € 1,00 = ${euro(calc.kmCost)}`} />
                <Row k="Extra’s"      v={euro(calc.extras)} />
                <Row k="Voertuigfactor" v={`× ${calc.vehicleFactor.toFixed(2)}`} />
                <hr className="my-3 border-gray-200" />
                <Row k="Subtotaal (excl. btw)" v={euro(calc.subtotal)} />
                <Row k="BTW 21%" v={euro(calc.btw)} />
                <div className="flex items-center justify-between text-base font-extrabold text-gray-900">
                  <span>Totaal (incl. btw)</span>
                  <span>{euro(calc.total)}</span>
                </div>
              </dl>

              <div className="mt-5 grid sm:grid-cols-2 gap-2">
                <a href="tel:0612345678"
                   className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-black px-4 py-3">
                  <Phone weight="fill" className="w-5 h-5" /> Bel nu
                </a>
                <a href="/contact"
                   className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-900">
                  Offerte / afspraak <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <p className="mt-2 text-xs text-gray-500">
                Indicatie. Tarief kan afwijken bij uitzonderlijke situaties (afgesloten parkeergarage, zwaar beschadigd voertuig, etc.).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({k, v}:{k:string; v:string}) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-gray-600">{k}</dt>
      <dd className="font-semibold text-gray-900">{v}</dd>
    </div>
  );
}

function round(n:number){ return Math.round(n*100)/100; }
function euro(n:number){ return n.toLocaleString('nl-NL',{style:'currency',currency:'EUR'}); }
