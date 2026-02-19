'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight, Phone } from '@phosphor-icons/react';

export type ContactFormValues = {
  name: string;
  phone: string;
  email?: string;
  location: string;
  destination?: string;
  vehicle?: string;
  message: string;
  consent: boolean;
};

type ContactFormProps = {
  action?: string;
  onSuccess?: (data: ContactFormValues) => void;
  onError?: (error: Error | string) => void;
  initialValues?: Partial<ContactFormValues>;
  meta?: Record<string, string>;
  className?: string;
  compact?: boolean;
};

export default function ContactForm({
  action,
  onSuccess,
  onError,
  initialValues,
  meta,
  className = '',
  compact = false,
}: ContactFormProps) {
  const t = useTranslations('contact.form');
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | { id?: string }>(null);
  const [err, setErr] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    setOk(null);

    const fd = new FormData(e.currentTarget);
    const name = (fd.get('name') as string)?.trim();
    const phone = (fd.get('phone') as string)?.trim();
    const location = (fd.get('location') as string)?.trim();
    const message = (fd.get('message') as string)?.trim();
    const consent = fd.get('consent') === 'on';

    if (!name || !phone || !location || !message || !consent) {
      setLoading(false);
      setErr(t('validation.required'));
      return;
    }

    const payload: ContactFormValues = {
      name,
      phone,
      email: (fd.get('email') as string)?.trim() || undefined,
      location,
      destination: (fd.get('destination') as string)?.trim() || undefined,
      vehicle: (fd.get('vehicle') as string)?.trim() || undefined,
      message,
      consent,
    };

    try {
      if (action) {
        const res = await fetch(action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...payload, meta }),
        });
        if (!res.ok) throw new Error(`Server error (${res.status})`);
        setOk({ id: crypto.randomUUID() });
        (e.currentTarget as HTMLFormElement).reset();
      }
      onSuccess?.(payload);
    } catch (error: any) {
      const msg = t('validation.error');
      setErr(msg);
      onError?.(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={err ? 'contact-form-error' : undefined}
      className={`rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-[0_12px_50px_rgba(0,0,0,0.06)] ${className}`}
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900">
          {t('title')}
        </h2>
        <p className="mt-2 text-gray-600">{t('subtitle')}</p>
      </div>

      {/* Fields */}
      <div className={`grid grid-cols-1 ${compact ? 'gap-4' : 'md:grid-cols-2 gap-5'}`}>
        <Field
          label={t('fields.name.label')}
          name="name"
          placeholder={t('fields.name.placeholder')}
          defaultValue={initialValues?.name}
          required
        />
        <Field
          label={t('fields.phone.label')}
          name="phone"
          type="tel"
          placeholder={t('fields.phone.placeholder')}
          defaultValue={initialValues?.phone}
          required
        />
        <Field
          label={t('fields.email.label')}
          name="email"
          type="email"
          placeholder={t('fields.email.placeholder')}
          defaultValue={initialValues?.email}
        />
        <Field
          label={t('fields.location.label')}
          name="location"
          placeholder={t('fields.location.placeholder')}
          defaultValue={initialValues?.location}
          required
        />
        <Field
          label={t('fields.destination.label')}
          name="destination"
          placeholder={t('fields.destination.placeholder')}
          defaultValue={initialValues?.destination}
        />
        <Field
          label={t('fields.vehicle.label')}
          name="vehicle"
          placeholder={t('fields.vehicle.placeholder')}
          defaultValue={initialValues?.vehicle}
        />
        <div className="md:col-span-2">
          <Textarea
            label={t('fields.message.label')}
            name="message"
            rows={compact ? 4 : 5}
            placeholder={t('fields.message.placeholder')}
            defaultValue={initialValues?.message}
            required
          />
        </div>

        {/* Consent */}
        <div className="md:col-span-2 flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="mt-1 size-5 rounded border border-gray-300 text-orange-600 focus:ring-orange-500"
            required
            defaultChecked={!!initialValues?.consent}
          />
          <label htmlFor="consent" className="text-sm text-gray-700">
            {t('consent')}
          </label>
        </div>
      </div>

      {/* Hidden meta */}
      {meta &&
        Object.entries(meta).map(([k, v]) => (
          <input key={k} type="hidden" name={`meta.${k}`} value={v} />
        ))}

      {/* Alerts */}
      {err && (
        <div
          id="contact-form-error"
          className="mt-5 p-4 rounded-lg bg-red-50 border border-red-200"
          role="alert"
        >
          <p className="text-sm text-red-700 font-medium">{err}</p>
        </div>
      )}
      {ok && (
        <div className="mt-5 p-4 rounded-lg bg-green-50 border border-green-200" role="status">
          <p className="text-sm text-green-700 font-medium">
            {t('validation.success')}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-black text-white
                     shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-xl
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300
                     disabled:opacity-60 disabled:cursor-not-allowed transition-all"
        >
          {loading ? t('submitting') : t('submit')}
          <ArrowRight weight="bold" className="h-5 w-5" />
        </button>

        <a
          href="tel:0625375323"
          className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold
                     border border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 transition-all"
        >
          <Phone weight="fill" className="h-5 w-5 text-orange-600" />
          {t('callInstead')}
        </a>
      </div>
    </form>
  );
}

/* ---------- Subcomponents ---------- */
function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  const id = name;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-gray-900">
        {label}
        {required && <span className="ml-1 text-orange-600">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400
                   shadow-sm outline-none transition
                   focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
      />
    </div>
  );
}

function Textarea({
  label,
  name,
  rows = 5,
  placeholder,
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  rows?: number;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  const id = name;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-gray-900">
        {label}
        {required && <span className="ml-1 text-orange-600">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400
                   shadow-sm outline-none transition resize-none
                   focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
      />
    </div>
  );
}
