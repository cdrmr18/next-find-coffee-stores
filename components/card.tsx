import Image from "next/image";
import Link from "next/link";

type CardProps = {
  name: string;
  img_url: string;
  href: string;
};

const Card = (props: CardProps) => {
  return (
    <div>
      <Link href={props.href}>
        <a href="">
          <h2>{props.name}</h2>
          <Image
            src={props.img_url}
            width={260}
            height={160}
            alt={`Coffee store: {name}`}
          />
        </a>
      </Link>
    </div>
  );
};

export default Card;
