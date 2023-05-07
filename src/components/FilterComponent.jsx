import { useSearchParams } from 'react-router-dom';

function FilterComponent() {
  const [params, setParams] = useSearchParams();

  return (
    <div className='p-5 text-center text-xl' onClick={() => setParams({ plate: 'pc' })}>
      {params.get('plate')} filter feature coming soon...
    </div>
  );
}

export default FilterComponent;
