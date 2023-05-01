import Cards from '../components/Card';
import { useGetAllGamesListQuery } from '../apiSlice/api';
function HomePage() {
  const { data, isLoading } = useGetAllGamesListQuery();
  if (isLoading) {
    return 'loading...';
  }
  return (
    <section className='flex flex-wrap bg-gray-900'>
      {data?.map(game => (
        <Cards key={game.id} {...game} />
      ))}
    </section>
  );
}

export default HomePage;
