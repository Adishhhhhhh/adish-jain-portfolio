import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Renders verbatim Notion markdown with GFM (tables, etc.) inside the editorial
// .md-content shell. Links open safely; everything else inherits the document styles.

export function MarkdownView({ children }: { children: string }) {
  return (
    <div className="md-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
