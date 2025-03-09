%
%Academic CV LaTeX Template
% Author: Dubasi Pavan Kumar
% LinkedIn: https://www.linkedin.com/in/im-pavankumar/
% License: MIT
%
% For errors, suggestions, or improvements, please contact:
% Email: pavankumard.pg19.ma@nitp.ac.in
%



\documentclass[a4paper,11pt]{article}

% Package imports
\usepackage{latexsym}
\usepackage{xcolor}
\usepackage{float}
\usepackage{ragged2e}
\usepackage[empty]{fullpage}
\usepackage{wrapfig}
\usepackage{lipsum}
\usepackage{tabularx}
\usepackage{titlesec}
\usepackage{geometry}
\usepackage{marvosym}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage{fancyhdr}
\usepackage{multicol}
\usepackage{graphicx}
\usepackage{cfr-lm}
\usepackage[T1]{fontenc}
\usepackage{fontawesome5}

% Color definitions
\definecolor{darkblue}{RGB}{0,0,139}

% Page layout
\setlength{\multicolsep}{0pt} 
\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}
\geometry{left=1.4cm, top=0.8cm, right=1.2cm, bottom=1cm}
\setlength{\footskip}{5pt} % Addressing fancyhdr warning

% Hyperlink setup (moved after fancyhdr to address warning)
\usepackage[hidelinks]{hyperref}
\hypersetup{
    colorlinks=true,
    linkcolor=darkblue,
    filecolor=darkblue,
    urlcolor=darkblue,
}

% Custom box settings
\usepackage[most]{tcolorbox}
\tcbset{
    frame code={},
    center title,
    left=0pt,
    right=0pt,
    top=0pt,
    bottom=0pt,
    colback=gray!20,
    colframe=white,
    width=\dimexpr\textwidth\relax,
    enlarge left by=-2mm,
    boxsep=4pt,
    arc=0pt,outer arc=0pt,
}

% URL style
\urlstyle{same}

% Text alignment
\raggedright
\setlength{\tabcolsep}{0in}

% Section formatting
\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-7pt}]

% Custom commands
\newcommand{\resumeItem}[2]{
  \item{
    \textbf{#1}{\hspace{0.5mm}#2 \vspace{-0.5mm}}
  }
}

\newcommand{\resumePOR}[3]{
\vspace{0.5mm}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1}\hspace{0.3mm}#2 & \textit{\small{#3}} 
    \end{tabular*}
    \vspace{-2mm}
}

\newcommand{\resumeSubheading}[4]{
\vspace{0.5mm}\item
    \begin{tabular*}{0.98\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1} & \textit{\footnotesize{#4}} \\
        \textit{\footnotesize{#3}} &  \footnotesize{#2}\\
    \end{tabular*}
    \vspace{-2.4mm}
}

\newcommand{\resumeProject}[4]{
\vspace{0.5mm}\item
    \begin{tabular*}{0.98\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1} & \textit{\footnotesize{#3}} \\
        \footnotesize{\textit{#2}} & \footnotesize{#4}
    \end{tabular*}
    \vspace{-2.4mm}
}

\newcommand{\resumeSubItem}[2]{\resumeItem{#1}{#2}\vspace{-4pt}}

\renewcommand{\labelitemi}{$\vcenter{\hbox{\tiny$\bullet$}}$}
\renewcommand{\labelitemii}{$\vcenter{\hbox{\tiny$\circ$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=*,labelsep=1mm]}
\newcommand{\resumeHeadingSkillStart}{\begin{itemize}[leftmargin=*,itemsep=1.7mm, rightmargin=2ex]}
\newcommand{\resumeItemListStart}{\begin{itemize}[leftmargin=*,labelsep=1mm,itemsep=0.5mm]}

\newcommand{\resumeSubHeadingListEnd}{\end{itemize}\vspace{2mm}}
\newcommand{\resumeHeadingSkillEnd}{\end{itemize}\vspace{-2mm}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-2mm}}
\newcommand{\cvsection}[1]{%
\vspace{2mm}
\begin{tcolorbox}
    \textbf{\large #1}
\end{tcolorbox}
    \vspace{-4mm}
}

\newcolumntype{L}{>{\raggedright\arraybackslash}X}%
\newcolumntype{R}{>{\raggedleft\arraybackslash}X}%
\newcolumntype{C}{>{\centering\arraybackslash}X}%

% Commands for icon sizing and positioning
\newcommand{\socialicon}[1]{\raisebox{-0.05em}{\resizebox{!}{1em}{#1}}}
\newcommand{\ieeeicon}[1]{\raisebox{-0.3em}{\resizebox{!}{1.3em}{#1}}}

% Font options
\newcommand{\headerfonti}{\fontfamily{phv}\selectfont} % Helvetica-like (similar to Arial/Calibri)
\newcommand{\headerfontii}{\fontfamily{ptm}\selectfont} % Times-like (similar to Times New Roman)
\newcommand{\headerfontiii}{\fontfamily{ppl}\selectfont} % Palatino (elegant serif)
\newcommand{\headerfontiv}{\fontfamily{pbk}\selectfont} % Bookman (readable serif)
\newcommand{\headerfontv}{\fontfamily{pag}\selectfont} % Avant Garde-like (similar to Trebuchet MS)
\newcommand{\headerfontvi}{\fontfamily{cmss}\selectfont} % Computer Modern Sans Serif
\newcommand{\headerfontvii}{\fontfamily{qhv}\selectfont} % Quasi-Helvetica (another Arial/Calibri alternative)
\newcommand{\headerfontviii}{\fontfamily{qpl}\selectfont} % Quasi-Palatino (another elegant serif option)
\newcommand{\headerfontix}{\fontfamily{qtm}\selectfont} % Quasi-Times (another Times New Roman alternative)
\newcommand{\headerfontx}{\fontfamily{bch}\selectfont} % Charter (clean serif font)

\begin{document}
\headerfontiii

% Header
\begin{center}
    {\Huge\textbf{Vibha Chaudhari}}
\end{center}
\vspace{-6mm}

\begin{center}
    \small{
    \href{tel:+9285121904}{+9285121904} | \href{mailto:vibhachaudhari.cs22@gmail.com}{vibhachaudhari.cs22@gmail.com} | 
    \href{https://vibhawebside.netlify.app/}{Vibha-website.com}
    }
\end{center}
\vspace{-6mm}

\begin{center}
    \small{
    \socialicon{\faLinkedin} \href{https://www.linkedin.com/in/vibha-chaudhari40/}{Linkedin} | 
    \socialicon{\faGithub} \href{https://github.com/Vibha40}{Github} | 
    }
\end{center}
\vspace{-6mm}
\begin{center}
    \small{Ganesh Nagar, Nai Basti, Satna M.P.,India}
\end{center}

\vspace{-8mm}

\definecolor{cyan}{RGB}{0, 79, 144}


\section{\textcolor{cyan}{Objective}}
\vspace{mm}
\small{
I am Vibha, a final-year Diploma in Engineering student at Government Polytechnic College, Satna,M.P. ,specializing in Software Development and Front-End Development. Proficient in programming languages such as Java, JavaScript, HTML, CSS, and experienced in applying Data Structures \& Algorithms (DSA) to solve complex problems. Passionate about problem-solving, coding challenges, and improving technical skills through mentoring and offering free computer lessons. I aim to apply my expertise in software development, front-end technologies, and algorithmic problem-solving to contribute to innovative projects and solutions.

}

\vspace{-3mm}
\section{\textcolor{cyan}{Education}}
\vspace{-0.4mm}
\resumeSubHeadingListStart

\resumeSubheading
{College :- Government Polytechnic College ,Satna }
{M.P, India}
{Computer Science Engineering}{2022- 2025}
\resumeItemListStart
\item Appearing
\resumeItemListEnd

\resumeSubheading
{Government higher secondary school Tighral 
}{M.P, India}
{Secondary Education}{ 2021-2022}
\resumeItemListStart
\item Percentage: 74.06\%
\resumeItemListEnd

\resumeSubHeadingListEnd
\vspace{-6mm}

\section{\textcolor{cyan}{Skills}}
\vspace{-0.4mm}
\resumeHeadingSkillStart

\resumeSubItem{\textbf{Front-End Development:}} 
{HTML, CSS, JavaScript,Tailwind CSS, Material-UI, Bootstrap}

\resumeSubItem{\textbf{Developer Tools:}} 
{Git, GitHub, Figma}

\resumeSubItem{\textbf{Soft Skills:}} 
{Teamwork, Communication, Problem-Solving, Time Management}

\resumeSubItem{\textbf{Languages:}} 
{Hindi, English}

 \resumeHeadingSkillEnd

\section{\textcolor{cyan}{Experience}}
\vspace{-0.4mm}
\resumeSubHeadingListStart

% English Language Instructor Project
\resumeProject
  {\textbf{English Language Instructor}}  
  {\textbf{English Teaching}}  
  {\textbf{Year:} 2022-2024}

\resumeItemListStart
  \item Developed tailored teaching strategies to boost student engagement and performance.
  \item Fostered an inclusive classroom environment that encouraged active participation.
  \item Created dynamic lesson plans with interactive activities and group discussions.
  \item Improved student communication skills, achieving progress in writing and speaking.
\resumeItemListEnd

\vspace{-6mm}
\resumeSubHeadingListEnd
 \section{\textcolor{cyan}{Projects}}
\vspace{-0.4mm}
\resumeSubHeadingListStart

% Guide to the Soul Project
\resumeProject
  {\textbf{Netflix-Clone Website}}  
  {\textbf{Technologies:} HTML, CSS, JavaScript, Material-UI}  
  {\textbf{Year:} 2024}  
  {{}[\href{https://elaborate-otter-56d9a0.netlify.app/}{\textcolor{darkblue}{\faIcon{globe}}}]}

\resumeItemListStart
  \item Built a \textbf{responsive Netflix clone} using \textbf{HTML}, \textbf{CSS}, \textbf{JavaScript}, and \textbf{Material-UI} for dynamic content streaming.
  \item Optimized for \textbf{mobile-first design} and \textbf{cross-browser compatibility} to ensure seamless access on any device.
  \item Customized UI with \textbf{Material-UI} for \textbf{dark/light mode toggle}, enhancing user experience.
\resumeItemListEnd


% Simon Game Project
\resumeProject
  {\textbf{Simon Game}}  
  {\textbf{Technologies:} HTML, CSS, JavaScript, Bootstrap}  
  {\textbf{Year:} 2023}
   {{}[\href{https://tiny-cheesecake-625f4c.netlify.app/}{\textcolor{darkblue}{\faIcon{globe}}}]}

\resumeItemListStart
  \item Developed a \textbf{Simon Game} with \textbf{HTML}, \textbf{CSS}, \textbf{JavaScript}, and \textbf{Bootstrap}.
  \item Implemented a responsive design with \textbf{Bootstrap} for optimal device compatibility.
  \item Created \textbf{dynamic color sequences} and user interaction using JavaScript.
  \item Added \textbf{CSS animations} for interactive button effects and transitions.
  \item Incorporated real-time feedback for user input validation and game progression.
\resumeItemListEnd


% Weather App Project
\resumeProject
  {\textbf{Weather App}}  
  {\textbf{Technologies:} HTML, CSS, JavaScript, Weather API}  
  {\textbf{Year:} 2022}
   {{}[\href{https://warm-daffodil-7c7093.netlify.app/}{\textcolor{darkblue}{\faIcon{globe}}}]}

\resumeItemListStart
  \item Built a \textbf{Weather App} using \textbf{HTML}, \textbf{CSS}, and \textbf{JavaScript} for real-time weather updates.
  \item Integrated a \textbf{Weather API} to fetch live data on temperature, humidity, and wind speed.
  \item Designed a \textbf{responsive interface} with \textbf{CSS} for seamless experience across devices.
  \item Enabled \textbf{dynamic weather searches} with \textbf{JavaScript} for user location-based queries.
  \item Added \textbf{interactive features} like search and weather icons for enhanced engagement.
\resumeItemListEnd



\vspace{-2mm}
 \resumeHeadingSkillEnd
 \section{\textcolor{cyan}{Certificates \& Achievements}}
\vspace{-0.4mm}
\resumeSubHeadingListStart
 \resumeSubItem{Zensoft Technologies Private Limited,Bhopal:}
    { Computer Science}
    \resumeSubItem{Academy Of Skill Development:}
    { Virtual Internship}
    \resumeSubItem{ TechIntern Fly:}
    { Java Development}

}

\end{document}