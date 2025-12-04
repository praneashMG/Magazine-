// --- Mock Article Database ---
// This acts as your backend/data source for the articles.
const articles = {
    'ai-future': {
        category: 'Technology',
        title: 'The Future of AI: New Era of Thinking Machines',
        date: 'October 15, 2025',
        author: 'Dr. Evelyn Reed',
        readTime: '8 min read',
        image: 'https://topfacade.ru/img/blog/4/dizajn_fasada_doma_v_amerikanskom_stile.jpg',
        body: `
            <p class="mb-6 text-lg text-gray-700">The world stands at the precipice of a new technological epoch, largely driven by the explosive development in Artificial Intelligence. Large Language Models (LLMs) have not only achieved human-level fluency but are beginning to demonstrate emergent reasoning capabilities.</p>
            <h3 class="text-3xl font-bold text-gray-900 mb-4 mt-8">Emergent Capabilities and Ethical Questions</h3>
            <p class="mb-6 text-lg text-gray-700">The shift from purely statistical models to systems that exhibit emergent, unpredictable behavior raises profound ethical and safety questions. True machine consciousness may still be years away, but the speed of progress demands immediate regulatory attention.</p>
            <h3 class="text-3xl font-bold text-gray-900 mb-4 mt-8">Autonomous Systems in the Next Decade</h3>
            <p class="mb-6 text-lg text-gray-700">Beyond LLMs, autonomous systems, particularly in logistics and manufacturing, are becoming increasingly sophisticated. We project that over 40% of global supply chains will be managed end-to-end by AI by 2035.</p>
        `
    },
    'urban-growth': {
        category: 'Urban Design',
        title: 'Urban Growth & The Rise of Intelligent Cities',
        date: 'September 5, 2025',
        author: 'Anya Sharma',
        readTime: '6 min read',
        image: 'images/urban.jpg',
        body: `
            <p class="mb-6 text-lg text-gray-700">Smart cities are no longer a concept; they are a reality powered by the Internet of Things (IoT) and big data. Data streams from traffic sensors, utility meters, and public Wi-Fi are being used to optimize city operations in real-time.</p>
            <h3 class="text-3xl font-bold text-gray-900 mb-4 mt-8">IoT Infrastructure and Efficiency</h3>
            <p class="mb-6 text-lg text-gray-700">Implementing IoT in infrastructure allows cities to drastically reduce resource waste. Intelligent grid management, for example, can predict and preemptively address power outages and water leaks, saving billions annually.</p>
            <p class="mb-6 text-lg text-gray-700">This shift demands a new set of skills from urban planners, focusing on data science and predictive analytics over traditional modeling.</p>
        `
    },
    'space-economy': {
        category: 'Space Economy',
        title: 'The Billion-Dollar Race to Orbit: Commercial Space Travel',
        date: 'August 1, 2025',
        author: 'Liam O\'Connell',
        readTime: '10 min read',
        image: 'images/space.jpg',
        body: `
            <p class="mb-6 text-lg text-gray-700">The commercialization of space has sparked a modern-day gold rush. Private companies are rapidly deploying satellites for global internet coverage, and the goal of space tourism is now firmly within reach.</p>
            <h3 class="text-3xl font-bold text-gray-900 mb-4 mt-8">Beyond Earth Orbit</h3>
            <p class="mb-6 text-lg text-gray-700">While suborbital flights grab headlines, the true economic frontier lies in deep space mining and establishing permanent lunar bases. These long-term projects are backed by a consortium of tech billionaires and international agencies.</p>
            <p class="mb-6 text-lg text-gray-700">The regulatory environment for space, particularly for resource extraction, is still nascent and represents a major area of international diplomatic conflict.</p>
        `
    },
    'climate-shift': {
        category: 'Environment',
        title: 'Climate Shift: Next 20 Years',
        date: 'August 20, 2025',
        author: 'The Editorial Team',
        readTime: '7 min read',
        image: 'images/climate.jpg',
        body: `
            <p class="mb-6 text-lg text-gray-700">A look at the most critical ecological predictions and necessary mitigation strategies for the next two decades. The focus must shift from purely conservation to large-scale ecological engineering projects, such as carbon capture.</p>
            <h3 class="text-3xl font-bold text-gray-900 mb-4 mt-8">Global Temperature Targets</h3>
            <p class="mb-6 text-lg text-gray-700">Achieving the $1.5^\circ \text{C}$ warming limit is increasingly challenging, requiring immediate and aggressive decarbonization efforts across all sectors globally.</p>
            <p class="mb-6 text-lg text-gray-700">Geoengineering solutions, while controversial, are moving from theoretical concepts to deployable, scalable technologies that may become necessary if emissions targets are missed.</p>
        `
    },
    'genetic-editing': {
        category: 'BioTech',
        title: 'CRISPR & The Ethics of Genetic Editing',
        date: 'July 1, 2025',
        author: 'Dr. Chen',
        readTime: '9 min read',
        image: 'images/dna.jpg',
        body: `
            <p class="mb-6 text-lg text-gray-700">Examining the revolutionary gene-editing technology, CRISPR, and the complex ethical boundaries it presents to humanity. The precision of the Cas9 enzyme has opened doors to curing hereditary diseases.</p>
            <h3 class="text-3xl font-bold text-gray-900 mb-4 mt-8">Somatic vs. Germline Editing</h3>
            <p class="mb-6 text-lg text-gray-700">The ethical debate primarily revolves around **germline editing**—changes that are inheritable—which could fundamentally alter the human gene pool for generations. Somatic editing, by contrast, only affects the treated individual.</p>
            <p class="mb-6 text-lg text-gray-700">Regulatory bodies worldwide are struggling to keep pace with the speed of research, creating a regulatory patchwork that poses risks to global collaboration.</p>
        `
    },
    'crypto-finance': {
        category: 'Finance',
        title: 'The Decentralized Ledger: Crypto\'s Next Phase',
        date: 'June 15, 2025',
        author: 'Maria Lopez',
        readTime: '5 min read',
        image: 'images/crypto.jpg',
        body: `
            <p class="mb-6 text-lg text-gray-700">The world of decentralized finance is evolving beyond simple cryptocurrencies to complex smart contracts and digital assets. Regulatory clarity remains the biggest hurdle for widespread institutional adoption.</p>
            <h3 class="text-3xl font-bold text-gray-900 mb-4 mt-8">Decentralized Autonomous Organizations (DAOs)</h3>
            <p class="mb-6 text-lg text-gray-700">DAOs are poised to disrupt corporate structures by replacing traditional governance with rules encoded on the blockchain, moving control away from centralized boards.</p>
            <p class="mb-6 text-lg text-gray-700">We analyze the security and scalability trade-offs of major layer-one blockchain platforms as they struggle to handle global transaction volumes.</p>
        `
    },
    'digital-art': {
        category: 'Culture',
        title: 'NFTs and the Evolution of Digital Art Ownership',
        date: 'May 1, 2025',
        author: 'Kenji Sato',
        readTime: '4 min read',
        image: 'images/art.jpg',
        body: `
            <p class="mb-6 text-lg text-gray-700">How Non-Fungible Tokens (NFTs) are redefining what it means to own a piece of digital art in the age of infinite reproduction. NFTs provide a crucial element of scarcity and verifiable provenance.</p>
            <h3 class="text-3xl font-bold text-gray-900 mb-4 mt-8">The Metadata Challenge</h3>
            <p class="mb-6 text-lg text-gray-700">While the token is on the blockchain, the actual artwork often resides off-chain, creating a security risk known as the **metadata challenge** for long-term ownership. Solutions involve decentralized storage networks like IPFS.</p>
            <p class="mb-6 text-lg text-gray-700">The art world is grappling with the shift from physical gallery space to fully immersive, metaverse-based exhibitions.</p>
        `
    },

    // Special Focus Articles
    'book-review': {
        category: 'Technology',
        title: 'Book Review: \'The AI Paradox\'',
        date: 'October 1, 2025',
        author: 'Reviewer Staff',
        readTime: '3 min read',
        image: 'images/book.jpg',
        body: '<p class="mb-6 text-lg text-gray-700">A concise analysis of Dr. Aris Thorne\'s new book, which explores the balance between AI\'s incredible potential and its catastrophic risks. A must-read for tech ethicists and casual observers alike. The book particularly excels in its breakdown of computational resource allocation.</p>',
    },

    'interview-smith': {
        category: 'Business',
        title: 'Interview with CEO Jane Smith',
        date: 'September 20, 2025',
        author: 'The Editorial Team',
        readTime: '12 min read',
        image: 'images/interview.jpg',
        body: '<p class="mb-6 text-lg text-gray-700">Exclusive insights from Jane Smith, CEO of Global Energy Solutions, on the future of renewable energy investment and corporate responsibility in a shifting market. She details the company\'s $500 million investment into offshore wind infrastructure.</p>',
    },

    'photo-essay-asia': {
        category: 'Urban Design',
        title: 'Photo Essay: Future of Asian Cities',
        date: 'September 10, 2025',
        author: 'Photographer Staff',
        readTime: '5 min read',
        image: 'images/photo_asia.jpg',
        body: '<p class="mb-6 text-lg text-gray-700">A visual journey through the mega-cities of Asia, showcasing the architectural innovation, population density challenges, and unique cultural blend defining their rapid development. We focus on four major metropolitan areas: Tokyo, Shanghai, Mumbai, and Jakarta.</p>',
    },
};


// --- Article Rendering Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const articleKey = urlParams.get('article');
    const container = document.getElementById('article-detail-container');
    
    container.innerHTML = '';

    if (articleKey && articles[articleKey]) {
        const articleData = articles[articleKey];

        let categoryColor = 'text-indigo-600';
        switch (articleData.category) {
            case 'Technology': categoryColor = 'text-red-700'; break;
            case 'Urban Design': categoryColor = 'text-teal-600'; break;
            case 'Space Economy': categoryColor = 'text-blue-700'; break;
            case 'Environment': categoryColor = 'text-green-700'; break;
            case 'BioTech': categoryColor = 'text-purple-700'; break;
            case 'Finance': categoryColor = 'text-amber-700'; break;
            case 'Culture': categoryColor = 'text-pink-700'; break;
            case 'Business': categoryColor = 'text-gray-700'; break;
            default: categoryColor = 'text-indigo-600';
        }

        // Updated Image Size Below ↓↓↓
        const articleHTML = `
            <article class="bg-white rounded-3xl shadow-2xl p-6 md:p-12 lg:p-16">
                
                <header class="mb-12 border-b border-gray-100 pb-8 text-center">
                    <span class="text-sm font-bold uppercase tracking-widest ${categoryColor}">${articleData.category}</span>
                    <h1 class="text-5xl md:text-7xl font-extrabold text-gray-900 mt-3 leading-tight">
                        ${articleData.title}
                    </h1>
                    <div class="flex items-center justify-center space-x-4 mt-6 text-gray-500 text-base font-medium">
                        <span>By ${articleData.author}</span>
                        <span class="text-gray-300">|</span>
                        <span>${articleData.date}</span>
                        <span class="text-gray-300">|</span>
                        <span class="text-gray-700">${articleData.readTime}</span>
                    </div>
                </header>

                <figure class="mb-12">
                    <img 
                        src="${articleData.image}"
                        alt="Image for ${articleData.title}"
                        class="w-full max-w-4xl mx-auto h-[380px] object-cover rounded-3xl shadow-xl border border-gray-100"
                    />
                    <figcaption class="text-center text-sm text-gray-500 mt-4">
                        ${articleData.title}: An overview.
                    </figcaption>
                </figure>
                
                <section class="article-content max-w-4xl mx-auto font-serif text-xl leading-relaxed">
                    ${articleData.body}
                </section>

                <footer class="mt-16 pt-8 border-t border-gray-100 text-center">
                    <p class="text-gray-500 text-sm">
                        End of Article. Thank you for reading The Modern Reader.
                    </p>
                    <a href="magazine.html" class="mt-4 inline-block text-indigo-600 font-semibold hover:text-indigo-800 transition">
                        ← Explore More Insights
                    </a>
                </footer>
                
            </article>
        `;

        container.innerHTML = articleHTML;

    } else {
        container.innerHTML = `
            <div class="text-center p-20 bg-white rounded-xl shadow-lg border-t-4 border-red-500">
                <h2 class="text-4xl font-extrabold text-gray-900 mt-4">404 - Article Not Found</h2>
                <p class="text-xl text-gray-600 mt-3">The knowledge you were searching for has taken a detour. Please check the URL.</p>
                <a href="magazine.html" class="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-md">
                    Return to Dashboard
                </a>
            </div>
        `;
    }
});
