import BodyContent from "./home/bodyContent";
import Finnearhospital from "./home/findnearhospital";
import Siteheader from "./home/siteheader";
import Navbar from "./Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Siteheader />
      <BodyContent />
      <Finnearhospital />
    </div>
  )
}
