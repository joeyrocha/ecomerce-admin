import Layout from "@/components/Layout";
import Link from "next/link"

export default function Products(){
    return(
        <Layout>
            <Link className="bg-gray-300 text-white py-1 px-2 rounded-md color-black" href={'/products/new'}>
                Add new product
            </Link>
        </Layout>
    )
}