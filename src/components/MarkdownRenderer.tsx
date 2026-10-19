import React from 'react';
import Markdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
  className?: string;
  isUser?: boolean;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className = '',
  isUser = false
}) => {
  return (
    <div className={`prose-markdown leading-relaxed ${className}`}>
      <Markdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-base sm:text-lg font-bold font-['Outfit'] mt-3 mb-1.5 tracking-tight text-inherit">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-sm sm:text-base font-bold font-['Outfit'] mt-3 mb-1 tracking-tight text-inherit">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xs sm:text-sm font-semibold font-['Outfit'] mt-2.5 mb-1 text-inherit">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xs font-semibold mt-2 mb-0.5 text-inherit">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="mb-2 last:mb-0 leading-relaxed">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-inherit">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-inherit">
              {children}
            </em>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-outside ml-4 mb-2 space-y-1 text-inherit">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside ml-4 mb-2 space-y-1 text-inherit">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-3 border-purple-400 dark:border-purple-500 pl-3 py-0.5 my-2 italic bg-purple-50/50 dark:bg-purple-950/20 rounded-r">
              {children}
            </blockquote>
          ),
          code: ({ children, className: codeClassName }) => {
            const isBlock = codeClassName?.includes('language-') || (typeof children === 'string' && children.includes('\n'));
            if (isBlock) {
              return (
                <pre className="p-3 my-2 rounded-xl bg-slate-950/90 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
                  <code>{children}</code>
                </pre>
              );
            }
            return (
              <code className={`px-1.5 py-0.5 rounded font-mono text-[0.88em] ${
                isUser 
                  ? 'bg-purple-700/60 text-white' 
                  : 'bg-slate-200/80 dark:bg-slate-800/80 text-purple-900 dark:text-purple-200 border border-slate-300/60 dark:border-slate-700/60'
              }`}>
                {children}
              </code>
            );
          },
          hr: () => (
            <hr className="my-3 border-slate-200/60 dark:border-slate-700/60" />
          )
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};
