import Image from "next/image";
import styles from "./page.module.css";
import ProductPage from "./product/page";
import MainCategoryList from "@/components/MainCategoryList";

export default function Home() {
  
  
  return (
    <main>
      <ProductPage/> {/*전체 목록 */}
      <MainCategoryList category='top'/>
      <MainCategoryList category='bottom'/>
    </main>
  );
}
