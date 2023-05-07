import Cards from '../components/Card';
import Loading from '../components/Loading';
import { useGetAllGamesListQuery } from '../apiSlice/api';

function HomePage() {
  const { data, isLoading } = useGetAllGamesListQuery();

  if (isLoading) <Loading />;

  return (
    <section className='flex flex-wrap dark:bg-gray-800 bg-white gap-16 pt-10 px-10 justify-center'>
      {data?.map((game, index) => (
        <Cards key={game.id} index={index} {...game} />
      ))}
    </section>
  );
}

export default HomePage;
