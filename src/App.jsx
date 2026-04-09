import React, { useState, useEffect, useRef } from 'react'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  ExternalLink,
  Star,
  Quote,
  Send,
  Code2,
  Database,
  Globe,
  Zap
} from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  // Skills data from your screenshot
  const frontendSkills = [
    { name: 'React', percentage: 90 },
    { name: 'Next.js', percentage: 85 },
    { name: 'styled-compl.', percentage: 90 },
    { name: 'GSAP', percentage: 80 },
    { name: 'Three.js', percentage: 50 },
  ]
  
  const backendSkills = [
    { name: 'Node.js', percentage: 80 },
    { name: 'REST API', percentage: 95 },
    { name: 'PostgreSQL', percentage: 75 },
    { name: 'MySQL', percentage: 80 },
    { name: 'PHP', percentage: 70 },
  ]
  
  const otherSkills = [
    { name: 'Firebase', percentage: 85 },
    { name: 'Python', percentage: 65 },
  ]
  
  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time analytics platform with Next.js and TensorFlow.js',
      tech: ['Next.js', 'Python', 'PostgreSQL', 'Tailwind'],
      image: 'https://placehold.co/600x400/1e1b4b/818cf8?text=Analytics+Dashboard'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack marketplace with payment integration and admin panel',
      tech: ['React', 'Node.js', 'MySQL', 'Stripe'],
      image: 'https://placehold.co/600x400/1e1b4b/818cf8?text=E-Commerce'
    },
    {
      title: 'Portfolio 3D Experience',
      description: 'Interactive portfolio with Three.js and GSAP animations',
      tech: ['Three.js', 'GSAP', 'React', 'Vite'],
      image: 'https://placehold.co/600x400/1e1b4b/818cf8?text=3D+Portfolio'
    }
  ]
  
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechStart',
      text: 'Mehdi delivered our project ahead of schedule. His expertise in Next.js and API development is outstanding.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      text: 'One of the most reliable developers I\'ve worked with. Great communication and technical skills.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Startup Founder',
      text: 'Mehdi transformed our idea into a fully functional product. Highly recommended!',
      rating: 5
    }
  ]
  
  const navItems = ['About', 'Skills', 'Projects', 'Testimonials', 'Contact']
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.toLowerCase())
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
      setActiveSection(section.toLowerCase())
    }
  }
  
  const SkillBar = ({ name, percentage }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-300">{name}</span>
        <span className="text-primary">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="skill-bar"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EB
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-400 hover:text-primary'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800">
            <div className="flex flex-col space-y-4 px-6 py-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-left transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-primary'
                      : 'text-gray-400 hover:text-primary'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-primary text-sm">Available for work</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
                El Mehdi Bekkous
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-primary mb-6">FULL-STACK DEVELOPER</div>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              Full-Stack Web Developer specializing in building exceptional digital experiences 
              with Next.js & modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('Projects')}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105"
              >
                View My Work →
              </button>
              <button 
                onClick={() => scrollToSection('Contact')}
                className="px-8 py-3 border border-gray-700 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a passionate Full-Stack Developer with over 5 years of experience building 
                web applications that solve real-world problems. My journey in tech started with 
                a curiosity for how things work, which evolved into a career focused on creating 
                elegant solutions.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I specialize in the modern JavaScript ecosystem, particularly Next.js and React, 
                but I'm equally comfortable working with various backend technologies. I believe 
                in writing clean, maintainable code and staying updated with industry best practices.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <Code2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <Zap className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold">4+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <Database className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary">Frontend</h3>
              {frontendSkills.map(skill => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 text-secondary">Backend & Database</h3>
              {backendSkills.map(skill => (
                <SkillBar key={skill.name} {...skill} />
              ))}
              <h3 className="text-xl font-semibold mt-6 mb-6 text-primary">Other</h3>
              {otherSkills.map(skill => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 rounded text-xs text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-primary hover:text-secondary transition-colors flex items-center gap-1 text-sm">
                    Live Demo <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800/30 rounded-xl p-6 border border-gray-800 hover:border-primary/50 transition-all">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-6">
                I'm always interested in hearing about new opportunities, collaborations, 
                or just having a chat about tech. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail size={20} className="text-primary" />
                  <span>mehdi.bekkous@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Github size={20} className="text-primary" />
                  <span>github.com/mehdibekkous</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Linkedin size={20} className="text-primary" />
                  <span>linkedin.com/in/mehdibekkous</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white"
              />
              <textarea 
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white"
              ></textarea>
              <button className="w-full px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl text-center text-gray-500 text-sm">
          <p>&copy; 2024 El Mehdi Bekkous. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
