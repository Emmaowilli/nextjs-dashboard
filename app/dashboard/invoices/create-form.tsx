'use client';

import { useActionState } from 'react';
import { createInvoice, State } from '@/app/lib/actions';
import { lusitana } from '@/app/ui/fonts';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import type { CustomerField } from '@/app/lib/definitions';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createInvoice, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
      
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"          
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

      
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="pointer-events-none absolute left-0 top-0 h-full flex items-center pl-3">
              <span className="text-gray-500">$</span>
            </div>
            <input
              id="amount"
              name="amount"           
              type="number"
              step="0.01"
              placeholder="0.00"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="amount-error"
            />
          </div>
          <div id="amount-error" aria-live="polite" aria-atomic="true">
            {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        
        <div className="mb-4">
          <label htmlFor="status" className="mb-2 block text-sm font-medium">
            Set the invoice status
          </label>
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                id="pending"
                name="status"         
                type="radio"
                value="pending"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="pending" className="ml-2 text-sm text-gray-700">
                Pending
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="paid"
                name="status"           
                type="radio"
                value="paid"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="paid" className="ml-2 text-sm text-gray-700">
                Paid
              </label>
            </div>
          </div>
          <div id="status-error" aria-live="polite" aria-atomic="true">
            {state.errors?.status &&
              state.errors.status.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button
          type="button"
          className="rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-500 hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
        >
          Create Invoice
        </button>
      </div>

      {state.message && (
        <p className="mt-4 text-sm text-red-500">{state.message}</p>
      )}
    </form>
  );
}