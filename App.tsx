import React from 'react';
import { OvertimeRecord } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import Header from './components/Header';
import OvertimeForm from './components/OvertimeForm';
import OvertimeTable from './components/OvertimeTable';

const App: React.FC = () => {
  const [records, setRecords] = useLocalStorage<OvertimeRecord[]>('overtimeRecords', []);

  const addRecord = (newRecord: Omit<OvertimeRecord, 'id'>) => {
    const recordWithId: OvertimeRecord = {
      ...newRecord,
      id: new Date().toISOString(),
    };
    setRecords(prevRecords => [recordWithId, ...prevRecords]);
  };

  const deleteRecord = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este registro?')) {
      setRecords(prevRecords => prevRecords.filter(record => record.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <OvertimeForm onAddRecord={addRecord} />
          </div>
          <div className="lg:col-span-2">
            <OvertimeTable records={records} onDeleteRecord={deleteRecord} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
