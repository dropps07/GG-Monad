'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'platform' | 'team' | 'faq'>('platform');

  useEffect(() => {
    // Simulate loading for smooth animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Founder info
  const founderInfo = {
    name: 'Tanishq Gupta',
    role: 'Founder & Lead Developer',
    avatar: '👨‍💻',
    description: 'Passionate Blockchain Developer with 22+ hackathon wins and proven expertise in Web3 innovation. Selected among 95 students globally for UZH Blockchain Summer School 2024. Demonstrated ability to deliver both solo and team projects, with a consistent track record of winning international competitions. Skilled in building decentralized applications that solve real-world problems across multiple blockchain platforms.',
    linkedin: 'tanishqgupta-tech',
    twitter: 'tanishqistaken'
  };

  // Sample FAQ data for GG Monad
  const faqItems = [
    { 
              question: 'What is GG Monad?',
        answer: 'GG Monad is a play-to-earn gaming platform built on the Electroneum blockchain. Players can compete in skill-based mini-games and earn real rewards in the form of ETN tokens.' 
    },
    { 
      question: 'How do I get started?', 
      answer: 'Connect your wallet, convert some ETN tokens into platform points, and start playing games! You\'ll earn rewards based on your performance and skill.' 
    },
    { 
              question: 'Is GG Monad secure?',
        answer: 'Yes, GG Monad is built on secure smart contracts that have been thoroughly audited. All game outcomes and prize distributions are transparent and verifiable on-chain.' 
    },
    { 
      question: 'What games are available?', 
      answer: 'Currently, we offer Flappy Bird and AI Challenge, with Cyber Racer and Memory Hacker coming soon. We\'re constantly working on adding new games and experiences.' 
    },
    { 
      question: 'How do rewards work?', 
      answer: 'When you win a game, you receive a prize in the form of platform points. These can be converted back to ETN tokens and withdrawn to your wallet.' 
    },
    { 
      question: 'Can I create my own game rooms?', 
      answer: 'Absolutely! You can create custom game rooms with your preferred entry fee, player limit, and game type. Invite friends or open it to the public.' 
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center arcade-bg">
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white bg-black overflow-hidden">
      <div className="container mx-auto px-4 pt-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-arcade text-white mb-4">ABOUT <span className="text-neon-blue">ELECTRO</span><span className="text-neon-pink">RCADE</span></h1>
          <p className="text-xl text-gray-300">Learn about our platform, vision, and the team behind it</p>
        </motion.div>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center border-b border-gray-800 mb-12">
          <button
            className={`py-3 px-8 font-arcade text-sm transition-all duration-300 ${
              activeTab === 'platform' 
              ? 'text-neon-blue border-b-2 border-neon-blue' 
              : 'text-gray-500 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('platform')}
          >
            THE PLATFORM
          </button>
          <button
            className={`py-3 px-8 font-arcade text-sm transition-all duration-300 ${
              activeTab === 'team' 
              ? 'text-neon-green border-b-2 border-neon-green' 
              : 'text-gray-500 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('team')}
          >
            OUR TEAM
          </button>
          <button
            className={`py-3 px-8 font-arcade text-sm transition-all duration-300 ${
              activeTab === 'faq' 
              ? 'text-neon-pink border-b-2 border-neon-pink' 
              : 'text-gray-500 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
        </div>
        
        {/* Platform Tab Content */}
        {activeTab === 'platform' && (
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-black/50 border border-neon-blue rounded-lg p-8">
                <h2 className="text-2xl font-arcade text-neon-blue mb-6">Our Mission</h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>
                    GG Monad was created with a simple yet powerful vision: to combine the nostalgic joy of arcade gaming with the innovative potential of blockchain technology. Our mission is to build a thriving play-to-earn ecosystem where skill is rewarded and fun is paramount.
                  </p>
                  <p>
                    We believe gaming should be accessible, engaging, and rewarding. By leveraging the Electroneum blockchain, we've created a platform where players can compete in skill-based mini-games and earn real value based on their performance.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-black/50 border border-neon-green rounded-lg p-8">
                <h2 className="text-2xl font-arcade text-neon-green mb-6">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-black/30 p-6 rounded-lg border border-gray-800 hover:border-neon-blue transition-all">
                    <div className="w-16 h-16 rounded-full bg-blue-900/30 border border-neon-blue flex items-center justify-center mb-4 mx-auto">
                      <span className="text-3xl">💰</span>
                    </div>
                    <h3 className="font-arcade text-neon-blue text-center mb-3">Deposit</h3>
                    <p className="text-gray-400 text-center">Convert ETN tokens into platform points that you can use to enter games and competitions.</p>
                  </div>
                  
                  <div className="bg-black/30 p-6 rounded-lg border border-gray-800 hover:border-neon-green transition-all">
                    <div className="w-16 h-16 rounded-full bg-green-900/30 border border-neon-green flex items-center justify-center mb-4 mx-auto">
                      <span className="text-3xl">🎮</span>
                    </div>
                    <h3 className="font-arcade text-neon-green text-center mb-3">Play</h3>
                    <p className="text-gray-400 text-center">Join game rooms or create your own. Compete against other players in skill-based mini-games.</p>
                  </div>
                  
                  <div className="bg-black/30 p-6 rounded-lg border border-gray-800 hover:border-neon-pink transition-all">
                    <div className="w-16 h-16 rounded-full bg-pink-900/30 border border-neon-pink flex items-center justify-center mb-4 mx-auto">
                      <span className="text-3xl">🏆</span>
                    </div>
                    <h3 className="font-arcade text-neon-pink text-center mb-3">Earn</h3>
                    <p className="text-gray-400 text-center">Win games to earn points which can be converted back to ETN tokens and withdrawn.</p>
                  </div>
                </div>
                
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>
                    Our platform uses smart contracts to ensure fair play and transparent prize distribution. All game outcomes and transactions are recorded on the Electroneum blockchain, making the entire process trustless and verifiable.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-black/50 border border-neon-pink rounded-lg p-8">
                <h2 className="text-2xl font-arcade text-neon-pink mb-6">Blockchain Integration</h2>
                <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                  <div className="flex-1 text-gray-300 space-y-4 leading-relaxed">
                    <p>
                      GG Monad is built on Electroneum, a secure and efficient blockchain designed for usability and speed. All transactions, game results, and prize distributions are recorded on-chain for complete transparency.
                    </p>
                    <p>
                      Smart contracts handle all game mechanics, ensuring fair play and automated prize distribution. No central authority controls the outcome of games or the distribution of prizes.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink opacity-20 blur-xl animate-pulse"></div>
                      <div className="relative z-10 flex items-center justify-center h-full">
                        <Image 
                          src="/images/games/flappy-bird.png" 
                          alt="Electroneum Logo" 
                          width={160} 
                          height={160}
                          className="drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-arcade text-neon-pink mb-4 text-center">TOKEN INTEGRATION</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg text-neon-blue mb-2">DEPOSIT & PLAY</h4>
                      <p className="text-gray-300">
                        Convert your ETN tokens into platform points at a rate of 1 ETN = 1,000 points.
                        Use these points to enter game rooms with various entry fees and compete for prizes.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg text-neon-green mb-2">WITHDRAW & EARN</h4>
                      <p className="text-gray-300">
                        Convert your winnings back to ETN at the same rate: 1,000 points = 1 ETN.
                        Withdraw directly to your wallet with minimal fees.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-black/50 border border-neon-blue rounded-lg p-8">
                <h2 className="text-2xl font-arcade text-neon-blue mb-6">Our Games</h2>
                <div className="text-gray-300 space-y-4 leading-relaxed">
                  <p>
                    GG Monad features a growing collection of skill-based mini-games, each with its own unique gameplay and challenge. Our games are designed to be easy to learn but difficult to master, rewarding practice and skill development.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-black/30 border border-neon-green p-6 rounded-lg hover:border-neon-blue transition-all">
                    <h3 className="font-arcade text-neon-blue text-xl mb-3">Flappy Bird</h3>
                    <p className="text-gray-400 mb-3">The arcade classic reimagined for blockchain. Navigate through pipes and compete for the highest score.</p>
                    <p className="text-neon-green text-sm">Available Now</p>
                  </div>
                  
                  <div className="bg-black/30 border border-neon-pink p-6 rounded-lg hover:border-neon-blue transition-all">
                    <h3 className="font-arcade text-neon-blue text-xl mb-3">AI Challenge</h3>
                    <p className="text-gray-400 mb-3">Try to trick the AI into saying a specific word within the time limit.</p>
                    <p className="text-neon-green text-sm">Available Now</p>
                  </div>
                  
                  <div className="bg-black/30 border border-gray-700 p-6 rounded-lg">
                    <h3 className="font-arcade text-neon-blue text-xl mb-3">Cyber Racer</h3>
                    <p className="text-gray-400 mb-3">Race against other players in this fast-paced arcade racer.</p>
                    <p className="text-yellow-500 text-sm">Coming Soon</p>
                  </div>
                  
                  <div className="bg-black/30 border border-gray-700 p-6 rounded-lg">
                    <h3 className="font-arcade text-neon-blue text-xl mb-3">Memory Hacker</h3>
                    <p className="text-gray-400 mb-3">Test your memory skills in this cyberpunk themed game.</p>
                    <p className="text-yellow-500 text-sm">Coming Soon</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Link 
                    href="/games" 
                    className="bg-gradient-to-r from-neon-pink to-neon-blue text-white font-bold py-3 px-8 rounded-full hover:from-neon-blue hover:to-neon-pink transition-all duration-300 shadow-glow-blue"
                  >
                    EXPLORE OUR GAMES
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
        
        {/* Team Tab Content */}
        {activeTab === 'team' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 border border-neon-green rounded-lg p-8"
          >
            <h2 className="text-2xl font-arcade text-neon-green mb-8 text-center">Meet The Team</h2>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-black/30 border border-gray-800 rounded-lg p-8 hover:border-neon-blue transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink flex items-center justify-center flex-shrink-0">
                    <span className="text-5xl">{founderInfo.avatar}</span>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-arcade text-neon-blue text-2xl mb-2">{founderInfo.name}</h3>
                    <p className="text-neon-pink text-lg mb-4">{founderInfo.role}</p>
                    <p className="text-gray-300 mb-6">{founderInfo.description}</p>
                    
                    <div className="flex gap-4 justify-center md:justify-start">
                      <a 
                        href={`https://linkedin.com/in/${founderInfo.linkedin}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-black/50 p-3 rounded-full border border-blue-600 text-blue-400 hover:bg-blue-900/30 transition-all"
                      >
                        <FaLinkedin size={24} />
                      </a>
                      <a 
                        href={`https://twitter.com/${founderInfo.twitter}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-black/50 p-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-900/30 transition-all"
                      >
                        <FaTwitter size={24} />
                      </a>
                      <a 
                        href="https://github.com/tanishqguptatech" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-black/50 p-3 rounded-full border border-gray-600 text-white hover:bg-gray-900/30 transition-all"
                      >
                        <FaGithub size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-black/30 border border-gray-800 rounded-lg text-center">
              <h3 className="font-arcade text-neon-blue text-xl mb-4">Join Our Team</h3>
              <p className="text-gray-300 mb-6">
                We're looking for passionate individuals who love blockchain technology, gaming, and want to build the future of play-to-earn platforms.
              </p>
              <div className="text-center">
                <a 
                  href="mailto:contact@ggmonad.io" 
                  className="bg-gradient-to-r from-neon-green to-neon-blue text-white font-bold py-3 px-8 rounded-full hover:from-neon-blue hover:to-neon-green transition-all duration-300 shadow-glow-blue"
                >
                  GET IN TOUCH
                </a>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* FAQ Tab Content */}
        {activeTab === 'faq' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 border border-neon-pink rounded-lg p-8"
          >
            <h2 className="text-2xl font-arcade text-neon-pink mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <FaqItem 
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  index={index}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-6">Still have questions? Feel free to reach out!</p>
              <a 
                href="mailto:support@ggmonad.io" 
                className="bg-gradient-to-r from-neon-pink to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:from-purple-600 hover:to-neon-pink transition-all duration-300 shadow-glow-pink"
              >
                CONTACT SUPPORT
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`border border-gray-800 rounded-lg overflow-hidden ${isOpen ? 'bg-black/30' : 'bg-black/10 hover:bg-black/20'} transition-all`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left flex justify-between items-center"
      >
        <span className="font-medium text-white">{question}</span>
        <span className={`text-neon-pink transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="p-4 pt-0 text-gray-400 border-t border-gray-800"
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}