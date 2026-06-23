import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Anchor, Briefcase, Globe, Leaf, Lightbulb, MapPin, Ship, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663116405364/AiXRRaSLZzFrZzh2yzqXzd/logo_amtc-ZbvW8KXsgnYTkFNi7NwWwq.webp" 
              alt="AMTC Logo" 
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-lg font-bold text-primary" style={{ fontFamily: "Playfair Display, serif" }}>AMTC</h1>
              <p className="text-xs text-muted-foreground">Administración Marítima Territorio Centro</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#recinto" className="text-sm font-medium hover:text-accent transition-colors">Recinto Portuario</a>
            <a href="#oportunidades" className="text-sm font-medium hover:text-accent transition-colors">Oportunidades</a>
            <a href="#marco-legal" className="text-sm font-medium hover:text-accent transition-colors">Marco Legal</a>
            <a href="#contacto" className="text-sm font-medium hover:text-accent transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <h2 className="text-5xl lg:text-6xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
                Cienfuegos
              </h2>
              <p className="text-2xl text-sky-200" style={{ fontFamily: "Playfair Display, serif" }}>
                Su Hub Logístico en el Caribe
              </p>
            </div>
            <p className="text-lg text-gray-100 max-w-lg">
              Infraestructura de clase mundial, ubicación estratégica y oportunidades sin precedentes para inversores que buscan posicionarse en el corazón del Caribe.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-sky-400 hover:bg-sky-500 text-primary font-semibold px-8" size="lg">
                Explorar Oportunidades
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                Descargar Portafolio
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
              { number: "8,962", label: "Hectáreas Disponibles", icon: MapPin },
              { number: "15", label: "Zonas Operacionales", icon: Anchor },
              { number: "300", label: "Atraques (Marina)", icon: Ship },
              { number: "4", label: "Sectores Clave", icon: Briefcase }
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
              El Recinto Portuario
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una bahía de bolsa de grandes dimensiones con infraestructura de clase mundial y capacidad de expansión sin límites.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-accent" />
                    Ubicación Estratégica
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Posicionada en el corazón del Caribe, a 48 millas al oeste del puerto de Casilda y 59 millas al este de la bahía de Cochinos. Conexión directa con rutas de comercio global.
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Anchor className="w-5 h-5 text-secondary" />
                    Infraestructura Moderna
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Terminales multiusos, astilleros, instalaciones de pesca, zonas de almacenamiento y servicios marítimos de clase mundial.
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    Potencial de Expansión
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  8,962 hectáreas disponibles con 15 zonas operacionales para desarrollo industrial, logístico, turístico y energético.
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

      {/* Oportunidades Section */}
      <section id="oportunidades" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-primary" style={{ fontFamily: "Playfair Display, serif" }}>
              Sectores de Inversión
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuatro pilares estratégicos que transformarán a Cienfuegos en el motor económico del Caribe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Logística",
                percentage: "35%",
                description: "Conectividad regional y eficiencia operativa",
                icon: Briefcase,
                color: "bg-blue-50 border-blue-200"
              },
              {
                title: "Turismo",
                percentage: "30%",
                description: "Destino estratégico con alto potencial",
                icon: Globe,
                color: "bg-green-50 border-green-200"
              },
              {
                title: "Pesca",
                percentage: "20%",
                description: "Riqueza marina y desarrollo sostenible",
                icon: Ship,
                color: "bg-cyan-50 border-cyan-200"
              },
              {
                title: "Energía",
                percentage: "15%",
                description: "Transición energética y sostenibilidad",
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
              Marco Legal de Apertura Económica
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuba ha implementado 176 reformas económicas (2024-2026) que facilitan la inversión extranjera con procedimientos ágiles y garantías jurídicas.
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
                title: "Flexibilidad Monetaria",
                items: ["Operaciones en múltiples monedas", "Tarifas competitivas en divisas", "Cuentas bancarias en el exterior"]
              },
              {
                title: "Simplificación de Trámites",
                items: ["Evaluación en 7 días", "Aprobación tácita (silencio positivo)", "Plan de negocio vs. factibilidad"]
              },
              {
                title: "Autonomía Operativa",
                items: ["Selección directa de personal", "Gratificaciones en divisas", "Comercialización mayorista sin restricciones"]
              },
              {
                title: "Garantías Jurídicas",
                items: ["Protección contra expropiación", "Transferencia libre de utilidades", "Seguridad legal garantizada"]
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
              Comienza Tu Inversión Hoy
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Únete a los inversores que están transformando a Cienfuegos en el hub logístico del Caribe.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sky-400 hover:bg-sky-500 text-primary font-semibold px-8" size="lg">
              Solicitar Información
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
              Agendar Reunión
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div className="space-y-3">
              <h3 className="text-lg font-bold">Administración Marítima Territorio Centro</h3>
              <p className="text-gray-400 text-sm">Cienfuegos, Cuba</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#recinto" className="hover:text-white transition-colors">Recinto Portuario</a></li>
                <li><a href="#oportunidades" className="hover:text-white transition-colors">Oportunidades</a></li>
                <li><a href="#marco-legal" className="hover:text-white transition-colors">Marco Legal</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Contacto</h4>
              <p className="text-gray-400 text-sm">
                Para consultas de inversión:<br/>
                <a href="mailto:inversiones@amtc.cu" className="hover:text-white transition-colors">inversiones@amtc.cu</a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Administración Marítima Territorio Centro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
