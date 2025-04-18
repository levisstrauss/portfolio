"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Calendar, Github, Linkedin, Twitter, ExternalLink, Clock } from "lucide-react"

const ContactInfo = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30 scroll-mt-20">
      <div className="container mx-auto">
        <div className="text-center section-heading">
          <h2 className="text-3xl font-bold mb-3">
            <span className="gradient-text">Contact Information</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or have questions about my work? Feel free to reach out through any of the
            channels below.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden">
            <CardHeader className="bg-primary text-white p-5">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Mail className="h-6 w-6" />
                Get in Touch
              </CardTitle>
              <p className="text-primary-foreground/90 mt-2">
                I'm currently available for freelance work, consulting, and full-time positions in AI and machine
                learning.
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
                {/* Left Column - Direct Contact */}
                <div className="space-y-5">
                  <h3 className="text-lg font-semibold border-b pb-2">Direct Contact</h3>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a
                        href="mailto:zcoulibalyeng@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        zcoulibalyeng@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">United States</p>
                      <p className="text-sm text-muted-foreground">Available for remote work worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Availability</h4>
                      <p className="text-muted-foreground">Open to new opportunities</p>
                      <p className="text-sm text-muted-foreground">Response time: Within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Online Presence */}
                <div className="space-y-5">
                  <h3 className="text-lg font-semibold border-b pb-2">Online Presence</h3>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/in/codemon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        www.linkedin.com/in/codemon
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <p className="text-sm text-muted-foreground">Connect with me professionally</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <a
                        href="https://github.com/levisstrauss"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        github.com/levisstrauss
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <p className="text-sm text-muted-foreground">Check out my projects</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                      <Twitter className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Twitter</h4>
                      <a
                        href="https://x.com/codemon2024"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        @codemon2024
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <p className="text-sm text-muted-foreground">Follow me for AI/ML insights and updates</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t p-5">
                <h3 className="text-lg font-semibold mb-3">Preferred Contact Method</h3>
                <p className="text-muted-foreground mb-4">
                  The best way to reach me is via email. For urgent matters, please use LinkedIn messaging.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="default" className="gap-2">
                    <a href="mailto:zcoulibalyeng@gmail.com">
                      <Mail className="h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <a href="https://www.linkedin.com/in/codemon" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfo
