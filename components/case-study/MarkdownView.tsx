import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Renders verbatim Notion markdown with GFM (tables, etc.) inside the editorial
// .md-content shell. External links open in a new tab; internal (/) links
// navigate in place. Everything else inherits the document styles.

export function MarkdownView({ children }: { children: string }) {
  return (
    <div className="md-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) =>
            href?.startsWith("/") ? (
              <a href={href}>{children}</a>
            ) : (
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
