import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Link  from 'next/link';

type ComponentPageProps = {
  slug: string;
}; // criando o tipo da props que iremos buscar no caso aqui é o slug da página

const Post: NextPage<ComponentPageProps> = ({ slug }) => {
  return (
    <div>
      <h1>Você acessou:{slug}</h1>
      <Link href="/blog/novo-curso-de-mysql">
        <a>Link para o post</a>
      </Link>
      
    </div>
  );
};

/*
 * acima criamos o component post e sinalizamos que ele será uma página com o NextPage que deve ser
 * importado de next, após isso dissemos qual o tipo de nossas props
 * e abaixo exportamos o component
 */

export default Post;

type Params = {
  slug: string;
};

/**
 * novamente criamos o tipo do parametro que estamos buscando pois vamos usar o slug
 * usamos a função padrão GetSercerSidePropsContext que busca os parametros da URL
 * passamos o tipo de parametro que iremos receber ele vira como string no caso
 * conferimos se o parametro existe e iniciamos extraindo o "slug" de params e depois
 * repassando ele para a props que iremos pegar lá na nossa página.
 * se não tiver slug ele retornará undefind e redirecionará para destination voltando para a home.
 * um detalhe que no next o return é feito entre chaves diferente do react comum que é entre parenteses
 */

export function getServerSideProps({
  params,
}: GetServerSidePropsContext<Params>) {
  if (params) {
    const { slug } = params;
    return {
      props: {
        slug,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}
