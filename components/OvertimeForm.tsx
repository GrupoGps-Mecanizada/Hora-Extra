import React, { useState } from 'react';
import type { OvertimeRecord } from '../types';

interface OvertimeFormProps {
  onAddRecord: (record: Omit<OvertimeRecord, 'id'>) => void;
}

const OvertimeForm: React.FC<OvertimeFormProps> = ({ onAddRecord }) => {
  const [data, setData] = useState<string>('');
  const [colaborador, setColaborador] = useState<string>('');
  const [justificativa, setJustificativa] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data || !colaborador) {
      alert('Por favor, preencha a data e o nome do colaborador.');
      return;
    }
    onAddRecord({ data, colaborador, justificativa });
    setData('');
    setColaborador('');
    setJustificativa('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg sticky top-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Adicionar Novo Registro</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="data" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Data
          </label>
          <input
            type="date"
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="colaborador" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Colaborador
          </label>
          <input
            type="text"
            id="colaborador"
            value={colaborador}
            onChange={(e) => setColaborador(e.target.value)}
            placeholder="Nome do Colaborador"
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="justificativa" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Justificativa
          </label>
          <textarea
            id="justificativa"
            value={justificativa}
            onChange={(e) => setJustificativa(e.target.value)}
            rows={3}
            placeholder="Motivo da hora extra"
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-800 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default OvertimeForm;
