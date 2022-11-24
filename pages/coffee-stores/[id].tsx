import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStores = () => {
  const router = useRouter();
  const query = router.query.id;
  return (
    <div>
      CoffeeStore <p>{query}</p>
      <Link href="/">Back home</Link>
    </div>
  );
};
export default CoffeeStores;
