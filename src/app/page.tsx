import { HomePage } from "@/screens/HomePage";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

 

export default async function Home({searchParams}:{searchParams:SearchParams}) {
  const data= await searchParams
  const [category] = Object.values(data)
  
  return <HomePage category={category as string} />;
}
