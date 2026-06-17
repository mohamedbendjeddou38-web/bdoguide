import { bdoData } from "@/data/bdoData";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function GuideArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let article = null;
  let categoryName = "";
  
  for (const guide of bdoData.guides) {
    const found = guide.articles.find(a => a.slug === slug);
    if (found) {
      article = found;
      categoryName = guide.category;
      break;
    }
  }

  if (!article) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-24">
      {/* Retour navigation */}
      <Link href="/guides" className="inline-flex items-center gap-3 text-gray-400 hover:text-[#c29543] transition-colors font-mono uppercase tracking-widest text-sm mb-8 group">
        <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i> 
        Retour aux guides
      </Link>
      
      {/* Header de l'article */}
      <div className="space-y-6 bg-[#2a2a2a] p-10 md:p-14 border border-[#c29543]/20 relative overflow-hidden group rounded-xl">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-[var(--spring-duration)] ease-[var(--bezier-smooth)] pointer-events-none">
          <i className={`fa-solid ${article.icon} text-[15rem] text-[#c29543]`}></i>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-[#242424] flex items-center justify-center border border-[#c29543]/50 text-[#c29543] shadow-[0_0_15px_rgba(194,149,67,0.2)]">
              <i className={`fa-solid ${article.icon} text-3xl`}></i>
            </div>
            <div>
              <p className="text-gray-400 font-mono text-xs tracking-[0.2em] uppercase mb-1">{categoryName}</p>
              <h1 className="text-3xl md:text-5xl font-black text-[#e9eae4] tracking-tight leading-[1.1]">
                {article.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal de l'article */}
      <div 
        className="guide-content text-lg text-gray-300 font-[var(--font-lora)] leading-relaxed bg-[#2a2a2a] p-10 md:p-14 border border-[#e9eae4] rounded-xl space-y-6 
          [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-[#c29543] [&>h3]:mt-12 [&>h3]:mb-6 [&>h3]:tracking-tight [&>h3]:uppercase [&>h3]:font-sans
          [&>p]:mb-6 [&>p]:leading-loose
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-3 [&>ul]:mb-6 [&>ul>li>strong]:text-[#c29543]
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-3 [&>ol]:mb-6 [&>ol>li>strong]:text-[#c29543]
          [&>strong]:text-[#e9eae4] [&>strong]:font-bold
          [&>em]:text-gray-400 [&>em]:italic
        "
        dangerouslySetInnerHTML={{ __html: article.fullContent || article.content }} 
      />
      
      {/* Footer Navigation */}
      <div className="pt-12 border-t border-gray-800 flex justify-center">
        <Link href="/guides" className="btn btn-outline border-[#c29543] text-[#c29543] hover:bg-[#c29543] hover:text-black">
          Explorer d'autres guides
        </Link>
      </div>
    </div>
  );
}
