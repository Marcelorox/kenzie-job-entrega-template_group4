import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

export function HomePage() {
  return (
    <>
      <section className="homeJobs_containner">
        <Header />
        <div className="homeJobs_caixa">
          {/* <h1>Trabalho é na jobs</h1> */}
        </div>
        <Footer />
      </section>
    </>
  );
}
