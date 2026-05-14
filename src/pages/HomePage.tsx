import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import {
  DailyContent,
  DictionaryProvider,
  SearchForm,
  SearchResult
} from "@/features/dictionary";

const HomePage = () => (
  <DictionaryProvider>
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 pt-8 space-y-6">
        <SearchForm />
        <SearchResult />
        <DailyContent />
      </main>

      <Footer />
    </div>
  </DictionaryProvider>
);

export default HomePage;
