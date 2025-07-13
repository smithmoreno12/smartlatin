import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, CreditCard, Calculator } from "lucide-react";

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PaymentModal = ({ open, onOpenChange }: PaymentModalProps) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const { toast } = useToast();

  const services = [
    {
      id: "web-development",
      title: "Desarrollo de sitios web",
      description: "Sitio web responsivo con diseño moderno y optimización SEO",
      price: 1500,
      originalPrice: 2000,
      discount: 25,
      features: ["Diseño responsivo", "Optimización SEO", "Panel de administración", "3 meses soporte"]
    },
    {
      id: "mobile-app",
      title: "Desarrollo de aplicaciones móviles",
      description: "Aplicaciones nativas para iOS y Android con UI moderna",
      price: 3500,
      originalPrice: 4500,
      discount: 22,
      features: ["App iOS y Android", "UI/UX personalizado", "Backend integrado", "6 meses soporte"]
    },
    {
      id: "ui-ux-design",
      title: "Diseño UI/UX",
      description: "Diseño completo de interfaz y experiencia de usuario",
      price: 800,
      originalPrice: 1000,
      discount: 20,
      features: ["Wireframes", "Prototipo interactivo", "Guía de estilo", "Assets de diseño"]
    },
    {
      id: "web-app",
      title: "Desarrollo de aplicaciones web",
      description: "Aplicación web completa con dashboard administrativo",
      price: 2800,
      originalPrice: 3500,
      discount: 20,
      features: ["Frontend React", "Backend API", "Base de datos", "Panel admin"]
    }
  ];

  const calculateTotal = (price: number) => {
    const iva = price * 0.19; // 19% IVA
    return {
      subtotal: price,
      iva: iva,
      total: price + iva
    };
  };

  const handlePayment = async () => {
    if (!selectedService) return;
    
    setProcessing(true);
    
    // Simular procesamiento de pago
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simular éxito/error aleatorio para demostración
      const success = Math.random() > 0.2; // 80% de éxito
      
      if (success) {
        toast({
          title: "¡Pago Exitoso!",
          description: "Tu pago ha sido procesado correctamente. Te contactaremos pronto.",
          duration: 5000,
        });
        onOpenChange(false);
        setSelectedService(null);
      } else {
        throw new Error("Error en el procesamiento del pago");
      }
    } catch (error) {
      toast({
        title: "Error en el Pago",
        description: "Hubo un problema procesando tu pago. Intenta nuevamente o contacta soporte.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setProcessing(false);
    }
  };

  const selectedServiceData = services.find(s => s.id === selectedService);
  const totals = selectedServiceData ? calculateTotal(selectedServiceData.price) : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <CreditCard className="w-6 h-6 text-green-600" />
            Pagar Proyecto
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Lista de Servicios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Selecciona un Servicio</h3>
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedService === service.id 
                    ? 'ring-2 ring-green-500 bg-green-50 dark:bg-green-950' 
                    : 'hover:bg-accent'
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base">{service.title}</CardTitle>
                    {selectedService === service.id && (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-green-600">
                      ${service.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${service.originalPrice.toLocaleString()}
                    </span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      -{service.discount}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-3">
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {service.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{service.features.length - 2} más
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Resumen de Pago */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Resumen de Pago
            </h3>
            
            {selectedServiceData && totals ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">{selectedServiceData.title}</CardTitle>
                  <CardDescription>{selectedServiceData.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Características incluidas */}
                  <div>
                    <h4 className="font-medium mb-2">Incluye:</h4>
                    <ul className="space-y-1">
                      {selectedServiceData.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cálculo de precios */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>${totals.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Descuento ({selectedServiceData.discount}%):</span>
                      <span className="text-green-600">
                        -${(selectedServiceData.originalPrice - selectedServiceData.price).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>IVA (19%):</span>
                      <span>${totals.iva.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t pt-2">
                      <span>Total:</span>
                      <span className="text-green-600">${totals.total.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handlePayment}
                    disabled={processing}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="lg"
                  >
                    {processing ? "Procesando..." : "Continuar con el Pago"}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center h-40 text-muted-foreground">
                  Selecciona un servicio para ver el resumen
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;