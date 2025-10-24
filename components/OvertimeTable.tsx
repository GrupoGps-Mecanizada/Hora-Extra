import React from 'react';
import type { OvertimeRecord } from '../types';

interface OvertimeTableProps {
  records: OvertimeRecord[];
  onDeleteRecord: (id: string) => void;
}

const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
};


const OvertimeTable: React.FC<OvertimeTableProps> = ({ records, onDeleteRecord }) => {
  if (records.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Registros de Horas Extras</h2>
        <p className="text-gray-500 dark:text-gray-400">Nenhum registro encontrado. Adicione um novo registro no formulário ao lado.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Registros</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 hidden md:table">
          <thead className="bg-yellow-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
                Data
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
                Colaborador
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-800 uppercase tracking-wider">
                Justificativa
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Ações</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{formatDate(record.data)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">{record.colaborador}</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 dark:text-gray-300">{record.justificativa || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => onDeleteRecord(record.id)}
                    className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-600 transition-colors"
                    aria-label={`Excluir registro de ${record.colaborador}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {records.map((record) => (
            <div key={record.id} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 shadow">
              <div className="flex justify-between items-start">
                  <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{record.colaborador}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{formatDate(record.data)}</p>
                  </div>
                   <button
                    onClick={() => onDeleteRecord(record.id)}
                    className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500 p-1 -mt-1 -mr-1"
                    aria-label={`Excluir registro de ${record.colaborador}`}
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                    </svg>
                  </button>
              </div>
              {record.justificativa && (
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-600 p-2 rounded">
                    <span className="font-medium">Justificativa:</span> {record.justificativa}
                  </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OvertimeTable;
