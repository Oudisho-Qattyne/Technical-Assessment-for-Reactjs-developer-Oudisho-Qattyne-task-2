import React from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
  preserveWhitespace?: boolean;
}

const FormattedText: React.FC<FormattedTextProps> = ({
  text,
  className = '',
  preserveWhitespace = true,
}) => {
  // Process the text
  const processText = (input: string): string => {
    return input
      .replace(/\\r\\n|\\n|\\r/g, '\n')  
      .replace(/\\t/g, '\t')            
      .replace(/\\"/g, '"')             
      .replace(/\\\\/g, '\\');          
  };

  const processedText = processText(text);

  if (preserveWhitespace) {
    return (
      <div 
        className={`whitespace-pre-wrap ${className}`}
        style={{ 
          lineHeight: '1.6',
          fontFamily: 'monospace',
          fontSize: '0.875rem'
        }}
      >
        {processedText}
      </div>
    );
  }

  const lines = processedText.split('\n');
  
  return (
    <div className={className}>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FormattedText;



// components/CodeFormatter.tsx
// import React, { useState } from 'react';
// import { FaCopy, FaCheck } from 'react-icons/fa';

// interface CodeFormatterProps {
//   text: string;
//   showLineNumbers?: boolean;
//   defaultLanguage?: string;
//   className?: string;
//   preserveWhitespace?: boolean;
//   showCopyButton?: boolean;
//   highlightInlineCode?: boolean;
// }

// const FormattedText: React.FC<CodeFormatterProps> = ({ 
//   text,
//   showLineNumbers = true,
//   defaultLanguage = 'typescript',
//   className = '',
//   preserveWhitespace = true,
//   showCopyButton = true,
//   highlightInlineCode = true,
// }) => {
//   const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

//   // Process escape sequences (\r\n, \t, etc.)
//   const processEscapeSequences = (input: string): string => {
//     return input
//       .replace(/\\r\\n/g, '\n')  // Windows line endings
//       .replace(/\\n/g, '\n')     // Unix line endings
//       .replace(/\\r/g, '\n')     // Mac line endings
//       .replace(/\\t/g, '    ')   // Tabs to spaces
//       .replace(/\\"/g, '"')      // Escaped quotes
//       .replace(/\\\\/g, '\\');   // Escaped backslashes
//   };

//   // Check if text is a complete code block
//   const isCompleteCodeBlock = (content: string): boolean => {
//     return content.startsWith('```') && content.endsWith('```');
//   };

//   // Extract language from code block
//   const extractLanguage = (codeText: string): string => {
//     const match = codeText.match(/^```(\w+)/);
//     return match ? match[1] : defaultLanguage;
//   };

//   // Clean code block (remove markers and trim)
//   const cleanCodeBlock = (codeText: string): string => {
//     let cleaned = codeText.replace(/^```[\w\s]*\n?/, '').replace(/```$/, '');
//     return cleaned.trim();
//   };

//   // Render inline code
//   const renderInlineCode = (segment: string, key: number): React.ReactNode => {
//     const codeContent = segment.slice(1, -1); // Remove backticks
    
//     if (!highlightInlineCode) {
//       return <code key={key}>{codeContent}</code>;
//     }

//     return (
//       <code 
//         key={key}
//         className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-pink-600 dark:text-pink-400 font-mono text-sm mx-0.5"
//       >
//         {codeContent}
//       </code>
//     );
//   };

//   // Render complete code block
//   const renderCodeBlock = (
//     codeContent: string, 
//     language: string, 
//     blockIndex: number
//   ): React.ReactNode => {
//     const lines = codeContent.split('\n');
    
//     const handleCopy = async () => {
//       await navigator.clipboard.writeText(codeContent);
//       setCopiedIndex(blockIndex);
//       setTimeout(() => setCopiedIndex(null), 2000);
//     };

//     return (
//       <div 
//         key={`codeblock-${blockIndex}`}
//         className="my-4 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700"
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
//           <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//             {language}
//           </span>
          
//           {showCopyButton && (
//             <button
//               onClick={handleCopy}
//               className="flex items-center space-x-2 px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition-colors"
//             >
//               {copiedIndex === blockIndex ? (
//                 <>
//                   <FaCheck className="text-green-500" />
//                   <span>Copied!</span>
//                 </>
//               ) : (
//                 <>
//                   <FaCopy />
//                   <span>Copy</span>
//                 </>
//               )}
//             </button>
//           )}
//         </div>
        
//         {/* Code Content */}
//         <div className="overflow-x-auto bg-gray-50 dark:bg-gray-900">
//           <pre className="p-4">
//             <code className="text-sm font-mono">
//               {showLineNumbers ? (
//                 <div className="flex">
//                   {/* Line Numbers */}
//                   <div className="pr-4 text-right select-none text-gray-500 border-r border-gray-300 dark:border-gray-700">
//                     {lines.map((_, i) => (
//                       <div key={i} className="leading-6">
//                         {i + 1}
//                       </div>
//                     ))}
//                   </div>
                  
//                   {/* Code Lines */}
//                   <div className="pl-4 flex-1">
//                     {lines.map((line, i) => (
//                       <div key={i} className="leading-6">
//                         {line}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 codeContent
//               )}
//             </code>
//           </pre>
//         </div>
//       </div>
//     );
//   };

//   // Parse text with mixed content (code blocks + regular text)
//   const parseMixedContent = (content: string): React.ReactNode[] => {
//     const parts: React.ReactNode[] = [];
//     let codeBlockIndex = 0;

//     // Process escape sequences first
//     const processedText = processEscapeSequences(content);

//     // If the entire text is a single code block
//     if (isCompleteCodeBlock(processedText)) {
//       const language = extractLanguage(processedText);
//       const cleanCode = cleanCodeBlock(processedText);
//       parts.push(renderCodeBlock(cleanCode, language, codeBlockIndex));
//       return parts;
//     }

//     // Split by code blocks
//     const codeBlockRegex = /(```[\s\S]*?```)/g;
//     const textParts = processedText.split(codeBlockRegex);
    
//     textParts.forEach((part, index) => {
//       if (isCompleteCodeBlock(part)) {
//         // This is a code block
//         const language = extractLanguage(part);
//         const cleanCode = cleanCodeBlock(part);
//         parts.push(renderCodeBlock(cleanCode, language, codeBlockIndex));
//         codeBlockIndex++;
//       } else if (part) {
//         // This is regular text with possible inline code
//         const inlineRegex = /(`[^`]+`)/g;
//         const textSegments = part.split(inlineRegex);
        
//         const textElements = textSegments.map((segment, segIndex) => {
//           if (segment.startsWith('`') && segment.endsWith('`')) {
//             return renderInlineCode(segment, segIndex);
//           }
//           return <span key={segIndex}>{segment}</span>;
//         });

//         parts.push(
//           <span key={`text-${index}`} className={preserveWhitespace ? 'whitespace-pre-wrap' : ''}>
//             {textElements}
//           </span>
//         );
//       }
//     });

//     return parts;
//   };

//   // Get the display content
//   const displayContent = parseMixedContent(text);

//   // Determine the wrapper class based on preserveWhitespace
//   const wrapperClass = preserveWhitespace 
//     ? `whitespace-pre-wrap font-mono text-sm ${className}`
//     : className;

//   return (
//     <div className={wrapperClass.trim()}>
//       {displayContent}
//     </div>
//   );
// };

// export default FormattedText;