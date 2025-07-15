"use client"

import { Phone, Shield, Heart, CheckCircle, Star, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CareFreedomLanding() {
  const whatsappNumber = "919188735695"
  const whatsappMessage = "Hello, I am interested in Care Freedom Policy"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const handleCTAClick = () => {
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Care Health</span>
          </div>
          <Button onClick={handleCTAClick} className="bg-green-600 hover:bg-green-700">
            <Phone className="h-4 w-4 mr-2" />
            ഇപ്പോൾ വിളിക്കൂ
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
            🏆 Best Claim Settlement Company 2025
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-yellow-300">Care Freedom Policy</span>
            <br />
            <span className="text-green-300">ഡയബറ്റിസ്, ഹൈ ബിപി, BMI</span>
            <br />
            ഉള്ളവർക്കും ഇൻഷുറൻസ്!
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            മെഡിക്കൽ ടെസ്റ്റ് ഇല്ല • 2 വർഷം മാത്രം വെയിറ്റിംഗ് • ₹10 ലക്ഷം വരെ കവറേജ്
          </p>

          {/* Key Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <CheckCircle className="h-6 w-6 text-green-300 mx-auto mb-2" />
              <div className="font-semibold">പ്രീ-എക്സിസ്റ്റിംഗ് ഡിസീസ്</div>
              <div className="opacity-80">2 വർഷം വെയിറ്റിംഗ് മാത്രം</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <CheckCircle className="h-6 w-6 text-green-300 mx-auto mb-2" />
              <div className="font-semibold">ഓട്ടോമാറ്റിക് റീചാർജ്</div>
              <div className="opacity-80">സം ഇൻഷുർഡ് തീർന്നാൽ</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <CheckCircle className="h-6 w-6 text-green-300 mx-auto mb-2" />
              <div className="font-semibold">ലൈഫ്‌ലോംഗ് റിന്യൂവൽ</div>
              <div className="opacity-80">പ്രായപരിധി ഇല്ല</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all"
            >
              <Phone className="h-5 w-5 mr-2" />
              ഇപ്പോൾ WhatsApp ൽ സംസാരിക്കൂ
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleCTAClick}
              className="bg-white text-blue-600 border-2 border-white hover:bg-blue-50 text-lg px-8 py-4 rounded-full"
            >
              സൗജന്യ ക്വോട്ട് നേടൂ
            </Button>
          </div>
          <div className="flex justify-center items-center space-x-6 text-sm opacity-80">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1 text-green-300" />
              മെഡിക്കൽ ടെസ്റ്റ് ഇല്ല
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1 text-green-300" />
              8000+ നെറ്റ്‌വർക്ക് ഹോസ്പിറ്റലുകൾ
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-1 text-green-300" />
              ഇൻസ്റ്റന്റ് പോളിസി
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Clock className="h-5 w-5 animate-pulse" />
            <span className="font-semibold">⏰ ഇന്ന് മാത്രം: 30% വരെ ഡിസ്കൗണ്ട് • അവസാന 24 മണിക്കൂർ!</span>
            <Button size="sm" onClick={handleCTAClick} className="bg-yellow-500 hover:bg-yellow-400 text-black ml-4">
              ഇപ്പോൾ ക്ലെയിം ചെയ്യൂ
            </Button>
          </div>
        </div>
      </section>

      {/* Comprehensive Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Care Freedom Policy യുടെ സമ്പൂർണ്ണ ബെനിഫിറ്റുകൾ
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">ഡയബറ്റിസ്, ഹൈ ബിപി, BMI ഉള്ളവർക്കും പൂർണ്ണ സുരക്ഷ</p>

          {/* Core Coverage */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold">ഇൻ-പേഷ്യന്റ് കെയർ</h3>
                </div>
                <p className="text-gray-600 mb-4">24 മണിക്കൂറിൽ കൂടുതൽ ഹോസ്പിറ്റലൈസേഷൻ</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• റൂം ചാർജുകൾ</li>
                  <li>• സർജൻ ഫീസ്</li>
                  <li>• ICU ചാർജുകൾ</li>
                  <li>• ഓപ്പറേഷൻ തിയേറ്റർ</li>
                </ul>
                <Button onClick={handleCTAClick} variant="outline" className="w-full mt-4 bg-transparent">
                  കൂടുതൽ അറിയൂ
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-green-200">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold">ഡേ കെയർ ട്രീറ്റ്‌മെന്റ്</h3>
                </div>
                <p className="text-gray-600 mb-4">24 മണിക്കൂറിൽ താഴെ ഹോസ്പിറ്റലൈസേഷൻ</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 170+ ഡേ കെയർ പ്രൊസീജറുകൾ</li>
                  <li>• കാറ്ററാക്റ് സർജറി</li>
                  <li>• ഡയാലിസിസ്</li>
                  <li>• കീമോതെറാപ്പി</li>
                </ul>
                <Button onClick={handleCTAClick} variant="outline" className="w-full mt-4 bg-transparent">
                  പ്രൊസീജർ ലിസ്റ്റ് കാണൂ
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-red-500 mr-3" />
                  <h3 className="text-lg font-semibold">പ്രീ & പോസ്റ്റ് ഹോസ്പിറ്റലൈസേഷൻ</h3>
                </div>
                <p className="text-gray-600 mb-4">ഹോസ്പിറ്റലിന് മുമ്പും ശേഷവും</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ടെസ്റ്റുകളും പരിശോധനകളും</li>
                  <li>• മരുന്നുകൾ</li>
                  <li>• ഫോളോ-അപ് വിസിറ്റുകൾ</li>
                  <li>• 30 ദിവസം പോസ്റ്റ് കവർ</li>
                </ul>
                <Button onClick={handleCTAClick} variant="outline" className="w-full mt-4 bg-transparent">
                  വിശദാംശങ്ങൾ
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Special Features */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">പ്രത്യേക സവിശേഷതകൾ</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="flex items-center mb-4">
                  <Badge className="bg-green-100 text-green-800">NEW</Badge>
                  <h4 className="font-semibold ml-2">ഓട്ടോമാറ്റിക് റീചാർജ്</h4>
                </div>
                <p className="text-gray-600">സം ഇൻഷുർഡ് തീർന്നാൽ ഓട്ടോമാറ്റിക്കായി റീചാർജ് ചെയ്യും</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="flex items-center mb-4">
                  <Badge className="bg-blue-100 text-blue-800">PREMIUM</Badge>
                  <h4 className="font-semibold ml-2">കൺസ്യൂമബിൾ അലവൻസ്</h4>
                </div>
                <p className="text-gray-600">ഹോസ്പിറ്റലിലെ അധിക ചെലവുകൾക്ക് പ്രതിദിനം അലവൻസ്</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="flex items-center mb-4">
                  <Badge className="bg-purple-100 text-purple-800">EXCLUSIVE</Badge>
                  <h4 className="font-semibold ml-2">ഡൊമിസിലിയറി ഹോസ്പിറ്റലൈസേഷൻ</h4>
                </div>
                <p className="text-gray-600">വീട്ടിലെ ചികിത്സയ്ക്കും കവറേജ് (3+ ദിവസം)</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow">
                <div className="flex items-center mb-4">
                  <Badge className="bg-yellow-100 text-yellow-800">BONUS</Badge>
                  <h4 className="font-semibold ml-2">കമ്പാനിയൻ ബെനിഫിറ്റ്</h4>
                </div>
                <p className="text-gray-600">10+ ദിവസം ഹോസ്പിറ്റലിൽ ആണെങ്കിൽ ലംപ്‌സം അമൗണ്ട്</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-4 rounded-full shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              എല്ലാ ബെനിഫിറ്റുകളും അറിയാൻ WhatsApp ചെയ്യൂ
            </Button>
          </div>
        </div>
      </section>

      {/* Health Check-up Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">സൗജന്യ ഹെൽത്ത് ചെക്ക്-അപ്പ് ബെനിഫിറ്റുകൾ</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">സാധാരണ ഹെൽത്ത് ചെക്ക്-അപ്പ്</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Complete Blood Count with ESR</li>
                  <li>• Urine Routine</li>
                  <li>• Blood Group</li>
                  <li>• Fasting Blood Sugar</li>
                  <li>• Lipid Profile</li>
                  <li>• Kidney Function Test</li>
                  <li>• ECG</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-2 border-green-200">
              <CardContent className="pt-6">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">ഡയബറ്റിസ് ഹെൽത്ത് ചെക്ക്-അപ്പ്</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• HbA1C</li>
                  <li>• Fasting & PP Blood Sugar</li>
                  <li>• Urine for Micro Albuminuria</li>
                  <li>• Liver Function Test</li>
                  <li>• TSH</li>
                  <li>• Medical Examination</li>
                  <li>• + സാധാരണ ടെസ്റ്റുകൾ</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-2 border-red-200">
              <CardContent className="pt-6">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">കാർഡിയാക് ഹെൽത്ത് ചെക്ക്-അപ്പ്</h3>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• TMT (Treadmill Test)</li>
                  <li>• Chest X-ray</li>
                  <li>• Lipid Profile</li>
                  <li>• Liver Function Test</li>
                  <li>• TSH</li>
                  <li>• Medical Examination</li>
                  <li>• + സാധാരണ ടെസ്റ്റുകൾ</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="bg-green-600 hover:bg-green-700 text-lg px-12 py-4 rounded-full"
            >
              <Phone className="h-5 w-5 mr-2" />
              ഹെൽത്ത് ചെക്ക്-അപ്പ് ബുക്ക് ചെയ്യൂ
            </Button>
          </div>
        </div>
      </section>

      {/* Comprehensive Coverage Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">സമ്പൂർണ്ണ കവറേജ് വിശദാംശങ്ങൾ</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-600">മുഖ്യ കവറേജുകൾ</h3>
              <div className="space-y-4">
                {[
                  "ഇൻ-പേഷ്യന്റ് കെയർ (24+ മണിക്കൂർ)",
                  "ഡേ കെയർ ട്രീറ്റ്‌മെന്റ് (170+ പ്രൊസീജറുകൾ)",
                  "പ്രീ-ഹോസ്പിറ്റലൈസേഷൻ എക്സ്പെൻസസ്",
                  "പോസ്റ്റ്-ഹോസ്പിറ്റലൈസേഷൻ (30 ദിവസം)",
                  "ആംബുലൻസ് കവർ",
                  "ഡൊമിസിലിയറി ഹോസ്പിറ്റലൈസേഷൻ",
                  "കൺസ്യൂമബിൾ അലവൻസ് (7 ദിവസം)",
                  "സം ഇൻഷുർഡ് ഓട്ടോ റീചാർജ്",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-600">പ്രത്യേക ബെനിഫിറ്റുകൾ</h3>
              <div className="space-y-4">
                {[
                  "കമ്പാനിയൻ ബെനിഫിറ്റ് (10+ ദിവസം ഹോസ്പിറ്റലിൽ)",
                  "ഡയാലിസിസ് കവർ (24 മാസം വരെ)",
                  "ഹോം കെയർ സേവനം (45 ദിവസം/വർഷം)",
                  "AYUSH ട്രീറ്റ്‌മെന്റ് കവർ",
                  "ആന്വൽ ഹെൽത്ത് ചെക്ക്-അപ്പ്",
                  "ടാക്സ് ബെനിഫിറ്റ് u/s 80D",
                  "ലൈഫ്‌ലോംഗ് റിന്യൂവബിലിറ്റി",
                  "ഫ്രീ ലുക്ക് പീരിയഡ് (30 ദിവസം)",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Plan Options */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">പ്ലാൻ ഓപ്ഷനുകൾ</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-0">
                  <h4 className="text-xl font-semibold mb-4 text-blue-600">Care Freedom Plan-1</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>സം ഇൻഷുർഡ്:</span>
                      <span className="font-semibold">₹3 ലക്ഷം / ₹5 ലക്ഷം</span>
                    </div>
                    <div className="flex justify-between">
                      <span>റൂം കാറ്റഗറി:</span>
                      <span className="font-semibold">ട്വിൻ ഷെയറിംഗ്</span>
                    </div>
                    <div className="flex justify-between">
                      <span>കോ-പേയ്‌മെന്റ്:</span>
                      <span className="font-semibold">20% പെർ ക്ലെയിം</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-blue-200">
                <CardContent className="pt-0">
                  <h4 className="text-xl font-semibold mb-4 text-green-600">Care Freedom Plan-2</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>സം ഇൻഷുർഡ്:</span>
                      <span className="font-semibold">₹7 ലക്ഷം / ₹10 ലക്ഷം</span>
                    </div>
                    <div className="flex justify-between">
                      <span>റൂം കാറ്റഗറി:</span>
                      <span className="font-semibold">സിംഗിൾ പ്രൈവറ്റ്</span>
                    </div>
                    <div className="flex justify-between">
                      <span>കോ-പേയ്‌മെന്റ്:</span>
                      <span className="font-semibold">20% പെർ ക്ലെയിം</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-4 rounded-full shadow-lg"
            >
              പ്ലാൻ തിരഞ്ഞെടുക്കാൻ WhatsApp ചെയ്യൂ
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">10 ലക്ഷത്തിലധികം സന്തുഷ്ട ഉപഭോക്താക്കൾ</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"വളരെ വേഗത്തിൽ ക്ലെയിം സെറ്റിൽ ആയി. മികച്ച സേവനം!"</p>
              <p className="font-semibold">- രാജേഷ് കുമാർ, കൊച്ചി</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"കാശ്‌ലെസ് ട്രീറ്റ്‌മെന്റ് വളരെ സുഗമമായിരുന്നു"</p>
              <p className="font-semibold">- പ്രിയ നായർ, തിരുവനന്തപുരം</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"24/7 സപ്പോർട്ട് ടീം എപ്പോഴും സഹായിക്കുന്നു"</p>
              <p className="font-semibold">- അനിൽ മേനോൻ, കോഴിക്കോട്</p>
            </div>
          </div>

          <Button
            size="lg"
            onClick={handleCTAClick}
            className="bg-green-600 hover:bg-green-700 text-lg px-12 py-4 rounded-full"
          >
            <Phone className="h-5 w-5 mr-2" />
            നിങ്ങളും ചേരൂ - ഇപ്പോൾ വിളിക്കൂ
          </Button>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">ഇന്ന് തന്നെ സുരക്ഷിതരാകൂ!</h2>
          <p className="text-xl mb-8 opacity-90">മാസം ₹500 മുതൽ • EMI സൗകര്യം ലഭ്യം • ഇൻസ്റ്റന്റ് അപ്രൂവൽ</p>
          <div className="bg-white/10 backdrop-blur rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300">₹5L</div>
                <div className="text-sm opacity-80">കവറേജ് അമൗണ്ട്</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">5000+</div>
                <div className="text-sm opacity-80">നെറ്റ്‌വർക്ക് ഹോസ്പിറ്റലുകൾ</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">24/7</div>
                <div className="text-sm opacity-80">കസ്റ്റമർ സപ്പോർട്ട്</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="bg-yellow-500 hover:bg-yellow-400 text-black text-lg px-12 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all"
            >
              <Phone className="h-5 w-5 mr-2" />
              ഇപ്പോൾ WhatsApp ൽ ബന്ധപ്പെടൂ
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleCTAClick}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-12 py-4 rounded-full"
            >
              സൗജന്യ ക്വോട്ട് നേടൂ
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ</h2>
          <div className="space-y-6">
            {[
              {
                q: "ഡയബറ്റിസ് ഉള്ളവർക്ക് മെഡിക്കൽ ടെസ്റ്റ് വേണോ?",
                a: "ഇല്ല, എല്ലാ പ്രായത്തിലും സം ഇൻഷുർഡിലും മെഡിക്കൽ ടെസ്റ്റ് ആവശ്യമില്ല",
              },
              {
                q: "പ്രീ-എക്സിസ്റ്റിംഗ് ഡിസീസിന് എത്ര വെയിറ്റിംഗ് പീരിയഡ്?",
                a: "വെറും 2 വർഷം മാത്രം. മറ്റ് കമ്പനികളിൽ 4 വർഷം വരെ ആണ്",
              },
              {
                q: "സം ഇൻഷുർഡ് തീർന്നാൽ എന്ത് ചെയ്യും?",
                a: "ഓട്ടോമാറ്റിക്കായി റീചാർജ് ചെയ്യും. കുടുംബത്തിലെ മറ്റുള്ളവർക്കും ഉപയോഗിക്കാം",
              },
              {
                q: "എത്ര ഹോസ്പിറ്റലുകളിൽ കാശ്‌ലെസ് സൗകര്യം?",
                a: "8000+ നെറ്റ്‌വർക്ക് ഹോസ്പിറ്റലുകളിൽ കാശ്‌ലെസ് ട്രീറ്റ്‌മെന്റ്",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-0">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-4 rounded-full"
            >
              കൂടുതൽ സംശയങ്ങൾക്ക് WhatsApp ചെയ്യൂ
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">⚡ അവസാന മുന്നറിയിപ്പ് ⚡</h2>
          <p className="text-xl mb-8">
            ഈ ഓഫർ ഇന്ന് രാത്രി 12 മണിക്ക് അവസാനിക്കും!
            <br />
            30% ഡിസ്കൗണ്ട് നഷ്ടപ്പെടുത്തരുത്!
          </p>

          <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8 inline-block">
            <div className="text-2xl font-bold text-yellow-300 mb-2">പ്രത്യേക വില: ₹500/മാസം മാത്രം</div>
            <div className="text-sm opacity-80 line-through">സാധാരണ വില: ₹714/മാസം</div>
          </div>

          <div className="space-y-4">
            <Button
              size="lg"
              onClick={handleCTAClick}
              className="bg-green-600 hover:bg-green-700 text-xl px-16 py-6 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all animate-pulse"
            >
              <Phone className="h-6 w-6 mr-3" />
              ഇപ്പോൾ തന്നെ WhatsApp ചെയ്യൂ!
            </Button>
            <div className="text-sm opacity-80">📞 കോൾ ചെയ്യാൻ: +91 91887 35695</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">Care Health</span>
          </div>
          <p className="text-gray-400 mb-4">IRDAI Registration No: 148 | CIN: U66010MH2007PLC174472</p>
          <div className="border-t border-gray-700 pt-4">
            <Button onClick={handleCTAClick} className="bg-green-600 hover:bg-green-700 mb-4">
              <Phone className="h-4 w-4 mr-2" />
              അവസാന അവസരം - ഇപ്പോൾ വിളിക്കൂ
            </Button>
            <p className="text-sm text-gray-500">© 2024 Care Health Insurance. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleCTAClick}
          className="bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-2xl animate-bounce"
          size="lg"
        >
          <Phone className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
