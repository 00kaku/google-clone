import Head from "next/head";
import Header from "../components/Header";
import Response from "../Response";
import { useRouter } from "next/router";
function Search ({ results }) {

	const router = useRouter();

	return (
		<div>
			<Head>
				<title>Search Results</title>
			</Head>
			{/* Header */}
			<Header />

			{/* Search Results */}
			{console.log(results)}
		</div>
	)
}

export default Search;

export async function getServerSideProps(context) {
	const useDummyData= true;
	const startIndex= context.query.start || "0";

	const data = useDummyData ?
				Response :
				await fetch(
					`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
					.then(response =>response.json());
	return {
		props:{
			results: data,
		}
	}
}
