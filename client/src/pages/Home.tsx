import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Anchor, Briefcase, Globe, Leaf, Lightbulb, MapPin, Ship, TrendingUp, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = {
    es: {
      nav: {
        recinto: "Recinto Portuario",
        operadores: "Operadores",
        oportunidades: "Oportunidades",
        marco: "Marco Legal",
        contacto: "Contacto"
      },
      hero: {
        title: "Cienfuegos",
        subtitle: "Su Hub Logístico en el Caribe",
        description: "Infraestructura de clase mundial, ubicación estratégica y oportunidades sin precedentes para inversores que buscan posicionarse en el corazón del Caribe.",
        btn1: "Explorar Oportunidades",
        btn2: "Descargar Portafolio"
      },
      stats: {
        hectareas: "Hectáreas Disponibles",
        zonas: "Zonas Operacionales",
        atraques: "Atraques (Marina)",
        sectores: "Sectores Clave"
      },
      recinto: {
        title: "El Recinto Portuario",
        subtitle: "Una bahía de bolsa de grandes dimensiones con infraestructura de clase mundial y capacidad de expansión sin límites.",
        ubicacion: "Ubicación Estratégica",
        ubicacion_desc: "Posicionada en el corazón del Caribe, a 48 millas al oeste del puerto de Casilda y 59 millas al este de la bahía de Cochinos. Conexión directa con rutas de comercio global.",
        infraestructura: "Infraestructura Moderna",
        infraestructura_desc: "Terminales multiusos, astilleros, instalaciones de pesca, zonas de almacenamiento y servicios marítimos de clase mundial.",
        expansion: "Potencial de Expansión",
        expansion_desc: "8,962 hectáreas disponibles con 15 zonas operacionales para desarrollo industrial, logístico, turístico y energético."
      },
      operadores: {
        title: "Operadores Portuarios Actuales",
        subtitle: "Empresas líderes operando en el recinto portuario de Cienfuegos",
        empresa1: "Terminal de Contenedores Cienfuegos",
        desc1: "Operaciones de carga y descarga de contenedores, con capacidad de movimiento de 500,000 TEU anuales.",
        empresa2: "Empresa de Servicios Marítimos Cienfuegos",
        desc2: "Servicios de remolque, amarre, practicaje y servicios auxiliares para buques.",
        empresa3: "Astillero Cienfuegos",
        desc3: "Reparación y mantenimiento de buques, con capacidad de dique seco para embarcaciones de hasta 25,000 toneladas.",
        empresa4: "Terminal de Carga General",
        desc4: "Manipulación de carga general, proyecto, carga rodante y servicios de almacenamiento."
      },
      oportunidades: {
        title: "Sectores de Inversión",
        subtitle: "Cuatro pilares estratégicos que transformarán a Cienfuegos en el motor económico del Caribe.",
        logistica: "Logística",
        logistica_desc: "Conectividad regional y eficiencia operativa",
        turismo: "Turismo",
        turismo_desc: "Destino estratégico con alto potencial",
        pesca: "Pesca",
        pesca_desc: "Riqueza marina y desarrollo sostenible",
        energia: "Energía",
        energia_desc: "Transición energética y sostenibilidad"
      },
      areas_desarrollo: {
        title: "Áreas de Desarrollo Prioritario",
        subtitle: "Oportunidades inmediatas para inversión con alto potencial de retorno",
        area1_title: "Zona Logística Integrada",
        area1_desc: "Centro de distribución regional con almacenes modernos, zonas de valor agregado y servicios de consolidación de carga.",
        area2_title: "Complejo Turístico Náutico",
        area2_desc: "Marina de lujo de 300 atraques, resort de 5 estrellas, restaurantes y servicios premium para yates de gran eslora.",
        area3_title: "Parque Industrial Portuario",
        area3_desc: "Zona para manufacturas orientadas a exportación con acceso directo a muelles y servicios de aduanas.",
        area4_title: "Centro de Energías Renovables",
        area4_desc: "Terminal para importación de equipos renovables, centro de investigación y desarrollo, y operaciones de energía limpia.",
        area5_title: "Zona de Pesca Sostenible",
        area5_desc: "Instalaciones de procesamiento de pescado, acuicultura moderna y centro de investigación marina.",
        area6_title: "Hub Digital Portuario",
        area6_desc: "Centro de innovación tecnológica, blockchain para logística, IoT y automatización portuaria."
      },
      marco: {
        title: "Marco Legal de Apertura Económica",
        subtitle: "Cuba ha implementado 176 reformas económicas (2024-2026) que facilitan la inversión extranjera con procedimientos ágiles y garantías jurídicas.",
        flexibilidad: "Flexibilidad Monetaria",
        simplificacion: "Simplificación de Trámites",
        autonomia: "Autonomía Operativa",
        garantias: "Garantías Jurídicas"
      },
      cta: {
        title: "Comienza Tu Inversión Hoy",
        subtitle: "Únete a los inversores que están transformando a Cienfuegos en el hub logístico del Caribe.",
        btn1: "Solicitar Información",
        btn2: "Agendar Reunión"
      },
      footer: {
        empresa: "Administración Marítima Territorio Centro",
        ubicacion: "Cienfuegos, Cuba",
        enlaces: "Enlaces Rápidos",
        contacto: "Contacto",
        derechos: "© 2026 Administración Marítima Territorio Centro. Todos los derechos reservados."
      }
    },
    en: {
      nav: {
        recinto: "Port Complex",
        operadores: "Operators",
        oportunidades: "Opportunities",
        marco: "Legal Framework",
        contacto: "Contact"
      },
      hero: {
        title: "Cienfuegos",
        subtitle: "Your Caribbean Logistics Hub",
        description: "World-class infrastructure, strategic location, and unprecedented opportunities for investors seeking to position themselves in the heart of the Caribbean.",
        btn1: "Explore Opportunities",
        btn2: "Download Portfolio"
      },
      stats: {
        hectareas: "Available Hectares",
        zonas: "Operational Zones",
        atraques: "Berths (Marina)",
        sectores: "Key Sectors"
      },
      recinto: {
        title: "The Port Complex",
        subtitle: "A large natural harbor with world-class infrastructure and unlimited expansion capacity.",
        ubicacion: "Strategic Location",
        ubicacion_desc: "Positioned in the heart of the Caribbean, 48 miles west of Casilda port and 59 miles east of Cochinos Bay. Direct connection with global trade routes.",
        infraestructura: "Modern Infrastructure",
        infraestructura_desc: "Multi-purpose terminals, shipyards, fishing facilities, storage zones and world-class maritime services.",
        expansion: "Expansion Potential",
        expansion_desc: "8,962 available hectares with 15 operational zones for industrial, logistics, tourism and energy development."
      },
      operadores: {
        title: "Current Port Operators",
        subtitle: "Leading companies operating in the Cienfuegos port complex",
        empresa1: "Cienfuegos Container Terminal",
        desc1: "Container loading and unloading operations, with capacity of 500,000 TEU annually.",
        empresa2: "Cienfuegos Maritime Services Company",
        desc2: "Towing, mooring, pilotage and auxiliary services for vessels.",
        empresa3: "Cienfuegos Shipyard",
        desc3: "Ship repair and maintenance, with dry dock capacity for vessels up to 25,000 tons.",
        empresa4: "General Cargo Terminal",
        desc4: "General cargo handling, project cargo, roll-on/roll-off and storage services."
      },
      oportunidades: {
        title: "Investment Sectors",
        subtitle: "Four strategic pillars that will transform Cienfuegos into the economic engine of the Caribbean.",
        logistica: "Logistics",
        logistica_desc: "Regional connectivity and operational efficiency",
        turismo: "Tourism",
        turismo_desc: "Strategic destination with high potential",
        pesca: "Fishing",
        pesca_desc: "Marine wealth and sustainable development",
        energia: "Energy",
        energia_desc: "Energy transition and sustainability"
      },
      areas_desarrollo: {
        title: "Priority Development Areas",
        subtitle: "Immediate investment opportunities with high return potential",
        area1_title: "Integrated Logistics Zone",
        area1_desc: "Regional distribution center with modern warehouses, value-added zones and cargo consolidation services.",
        area2_title: "Nautical Tourism Complex",
        area2_desc: "Luxury marina with 300 berths, 5-star resort, restaurants and premium services for large yachts.",
        area3_title: "Industrial Port Park",
        area3_desc: "Zone for export-oriented manufacturing with direct access to docks and customs services.",
        area4_title: "Renewable Energy Center",
        area4_desc: "Terminal for renewable equipment import, research and development center, and clean energy operations.",
        area5_title: "Sustainable Fishing Zone",
        area5_desc: "Fish processing facilities, modern aquaculture and marine research center.",
        area6_title: "Digital Port Hub",
        area6_desc: "Technology innovation center, blockchain for logistics, IoT and port automation."
      },
      marco: {
        title: "Economic Opening Legal Framework",
        subtitle: "Cuba has implemented 176 economic reforms (2024-2026) that facilitate foreign investment with agile procedures and legal guarantees.",
        flexibilidad: "Monetary Flexibility",
        simplificacion: "Simplified Procedures",
        autonomia: "Operational Autonomy",
        garantias: "Legal Guarantees"
      },
      cta: {
        title: "Start Your Investment Today",
        subtitle: "Join investors transforming Cienfuegos into the Caribbean's logistics hub.",
        btn1: "Request Information",
        btn2: "Schedule Meeting"
      },
      footer: {
        empresa: "Maritime Administration Central Territory",
        ubicacion: "Cienfuegos, Cuba",
        enlaces: "Quick Links",
        contacto: "Contact",
        derechos: "© 2026 Maritime Administration Central Territory. All rights reserved."
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/manus-storage/logo_amtc_oficial_7a4e60cd.png" 
              alt="AMTC Logo" 
              className="h-14 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            <a href="#recinto" className="text-sm font-medium hover:text-accent transition-colors">{t.nav.recinto}</a>
            <a href="#operadores" className="text-sm font-medium hover:text-accent transition-colors">{t.nav.operadores}</a>
            <a href="#oportunidades" className="text-sm font-medium hover:text-accent transition-colors">{t.nav.oportunidades}</a>
            <a href="#marco-legal" className="text-sm font-medium hover:text-accent transition-colors">{t.nav.marco}</a>
            <a href="#contacto" className="text-sm font-medium hover:text-accent transition-colors">{t.nav.contacto}</a>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "es" ? "bg-white text-primary shadow-sm" : "text-gray-600"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  language === "en" ? "bg-white text-primary shadow-sm" : "text-gray-600"
                }`}
              >
                EN
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-border bg-white">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <a href="#recinto" className="block text-sm font-medium hover:text-accent transition-colors">{t.nav.recinto}</a>
              <a href="#operadores" className="block text-sm font-medium hover:text-accent transition-colors">{t.nav.operadores}</a>
              <a href="#oportunidades" className="block text-sm font-medium hover:text-accent transition-colors">{t.nav.oportunidades}</a>
              <a href="#marco-legal" className="block text-sm font-medium hover:text-accent transition-colors">{t.nav.marco}</a>
              <a href="#contacto" className="block text-sm font-medium hover:text-accent transition-colors">{t.nav.contacto}</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <h2 className="text-5xl lg:text-6xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
                {t.hero.title}
              </h2>
              <p className="text-2xl text-sky-200" style={{ fontFamily: "Playfair Display, serif" }}>
                {t.hero.subtitle}
              </p>
            </div>
            <p className="text-lg text-gray-100 max-w-lg">
              {t.hero.description}
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-sky-400 hover:bg-sky-500 text-primary font-semibold px-8" size="lg">
                {t.hero.btn1}
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                {t.hero.btn2}
              </Button>
            </div>
          </div>
          <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663116405364/AiXRRaSLZzFrZzh2yzqXzd/hero_bahia_cienfuegos-82PLDsiqhkX3MZNLVKttLB.webp" 
              alt="Bahía de Cienfuegos" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "8,962", label: t.stats.hectareas, icon: MapPin },
              { number: "15", label: t.stats.zonas, icon: Anchor },
              { number: "300", label: t.stats.atraques, icon: Ship },
              { number: "4", label: t.stats.sectores, icon: Briefcase }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center space-y-3">
                  <Icon className="w-12 h-12 text-accent mx-auto" />
                  <p className="text-3xl font-bold text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recinto Portuario Section */}
      <section id="recinto" className="py-20 bg-gradient-to-b from-background to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              {t.recinto.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.recinto.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-accent" />
                    {t.recinto.ubicacion}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {t.recinto.ubicacion_desc}
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Anchor className="w-5 h-5 text-secondary" />
                    {t.recinto.infraestructura}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {t.recinto.infraestructura_desc}
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    {t.recinto.expansion}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {t.recinto.expansion_desc}
                </CardContent>
              </Card>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663116405364/AiXRRaSLZzFrZzh2yzqXzd/infographic_oportunidades-BtdrJDt5RCp7KX4z3Vbfqj.webp" 
                alt="Oportunidades de Inversión" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operadores Section */}
      <section id="operadores" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              {t.operadores.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.operadores.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: t.operadores.empresa1, desc: t.operadores.desc1 },
              { title: t.operadores.empresa2, desc: t.operadores.desc2 },
              { title: t.operadores.empresa3, desc: t.operadores.desc3 },
              { title: t.operadores.empresa4, desc: t.operadores.desc4 }
            ].map((op, idx) => (
              <Card key={idx} className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{op.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {op.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Desarrollo Section */}
      <section id="desarrollo" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              {t.areas_desarrollo.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.areas_desarrollo.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: t.areas_desarrollo.area1_title, desc: t.areas_desarrollo.area1_desc, icon: Briefcase },
              { title: t.areas_desarrollo.area2_title, desc: t.areas_desarrollo.area2_desc, icon: Globe },
              { title: t.areas_desarrollo.area3_title, desc: t.areas_desarrollo.area3_desc, icon: TrendingUp },
              { title: t.areas_desarrollo.area4_title, desc: t.areas_desarrollo.area4_desc, icon: Leaf },
              { title: t.areas_desarrollo.area5_title, desc: t.areas_desarrollo.area5_desc, icon: Ship },
              { title: t.areas_desarrollo.area6_title, desc: t.areas_desarrollo.area6_desc, icon: Lightbulb }
            ].map((area, idx) => {
              const Icon = area.icon;
              return (
                <Card key={idx} className="border-2 border-accent/20 hover:border-accent hover:shadow-lg transition-all">
                  <CardHeader>
                    <Icon className="w-8 h-8 text-accent mb-2" />
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {area.desc}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Oportunidades Section */}
      <section id="oportunidades" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              {t.oportunidades.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.oportunidades.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t.oportunidades.logistica,
                percentage: "35%",
                description: t.oportunidades.logistica_desc,
                icon: Briefcase,
                color: "bg-blue-50 border-blue-200"
              },
              {
                title: t.oportunidades.turismo,
                percentage: "30%",
                description: t.oportunidades.turismo_desc,
                icon: Globe,
                color: "bg-green-50 border-green-200"
              },
              {
                title: t.oportunidades.pesca,
                percentage: "20%",
                description: t.oportunidades.pesca_desc,
                icon: Ship,
                color: "bg-cyan-50 border-cyan-200"
              },
              {
                title: t.oportunidades.energia,
                percentage: "15%",
                description: t.oportunidades.energia_desc,
                icon: Leaf,
                color: "bg-emerald-50 border-emerald-200"
              }
            ].map((sector, idx) => {
              const Icon = sector.icon;
              return (
                <Card key={idx} className={`border-2 ${sector.color} hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <Icon className="w-8 h-8 text-accent mb-2" />
                    <CardTitle className="text-xl">{sector.title}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-primary">{sector.percentage}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{sector.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marco Legal Section */}
      <section id="marco-legal" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              {t.marco.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.marco.subtitle}
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-xl mb-12">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663116405364/AiXRRaSLZzFrZzh2yzqXzd/timeline_legal_framework-6JyVmnJV68r8Jmp2Een3As.webp" 
              alt="Timeline Legal" 
              className="w-full h-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: t.marco.flexibilidad,
                items: language === "es" 
                  ? ["Operaciones en múltiples monedas", "Tarifas competitivas en divisas", "Cuentas bancarias en el exterior"]
                  : ["Multi-currency operations", "Competitive currency rates", "Offshore bank accounts"]
              },
              {
                title: t.marco.simplificacion,
                items: language === "es"
                  ? ["Evaluación en 7 días", "Aprobación tácita (silencio positivo)", "Plan de negocio vs. factibilidad"]
                  : ["7-day evaluation", "Tacit approval (positive silence)", "Business plan vs. feasibility"]
              },
              {
                title: t.marco.autonomia,
                items: language === "es"
                  ? ["Selección directa de personal", "Gratificaciones en divisas", "Comercialización mayorista sin restricciones"]
                  : ["Direct personnel selection", "Currency-based bonuses", "Unrestricted wholesale commercialization"]
              },
              {
                title: t.marco.garantias,
                items: language === "es"
                  ? ["Protección contra expropiación", "Transferencia libre de utilidades", "Seguridad legal garantizada"]
                  : ["Expropriation protection", "Free profit transfer", "Guaranteed legal security"]
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-accent" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.items.map((i, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent font-bold">✓</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
              {t.cta.title}
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sky-400 hover:bg-sky-500 text-primary font-semibold px-8" size="lg">
              {t.cta.btn1}
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
              {t.cta.btn2}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div className="space-y-3">
              <h3 className="text-lg font-bold">{t.footer.empresa}</h3>
              <p className="text-gray-400 text-sm">{t.footer.ubicacion}</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">{t.footer.enlaces}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#recinto" className="hover:text-white transition-colors">{t.nav.recinto}</a></li>
                <li><a href="#oportunidades" className="hover:text-white transition-colors">{t.nav.oportunidades}</a></li>
                <li><a href="#marco-legal" className="hover:text-white transition-colors">{t.nav.marco}</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">{t.footer.contacto}</h4>
              <p className="text-gray-400 text-sm">
                {language === "es" ? "Para consultas de inversión:" : "For investment inquiries:"}<br/>
                <a href="mailto:inversiones@amtc.cu" className="hover:text-white transition-colors">inversiones@amtc.cu</a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>{t.footer.derechos}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
