import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [rsvpData, setRsvpData] = useState({
    name: "",
    attendance: "",
    guests: "",
    dietary: "",
    song: "",
    wishes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rsvpData.name && rsvpData.attendance) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log("RSVP Data:", rsvpData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wedding-soft-pink via-wedding-cream to-wedding-blush">
      {/* Background Pattern */}
      <div
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: `url('/img/6b740c65-f2c9-4591-b45e-467f0c6a0e72.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 max-w-3xl mx-auto border border-wedding-rose/20 shadow-2xl">
            <Icon
              name="HeartHandshake"
              className="text-wedding-rose mx-auto mb-6"
              size={64}
            />
            <h1 className="wedding-script text-7xl font-bold text-wedding-deep-rose mb-4">
              Александра & Дмитрий
            </h1>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-0.5 bg-wedding-gold"></div>
              <Icon name="Heart" className="text-wedding-rose" size={32} />
              <div className="w-16 h-0.5 bg-wedding-gold"></div>
            </div>
            <p className="wedding-elegant text-3xl text-wedding-deep-rose mb-4">
              20 июля 2024
            </p>
            <p className="wedding-modern text-xl text-wedding-deep-rose/80">
              Приглашаем вас разделить с нами самый счастливый день нашей жизни
            </p>
          </div>
        </section>

        {/* Countdown Timer */}
        <section className="mb-16 animate-scale-in">
          <Card className="bg-white/70 border-wedding-rose/30 max-w-2xl mx-auto shadow-xl">
            <CardContent className="p-8 text-center">
              <h2 className="wedding-elegant text-2xl font-bold text-wedding-deep-rose mb-6">
                До свадьбы осталось
              </h2>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { number: "45", label: "Дней" },
                  { number: "12", label: "Часов" },
                  { number: "34", label: "Минут" },
                  { number: "56", label: "Секунд" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-wedding-rose/10 rounded-lg p-4"
                  >
                    <div className="wedding-elegant text-3xl font-bold text-wedding-deep-rose">
                      {item.number}
                    </div>
                    <div className="wedding-modern text-sm text-wedding-deep-rose/70">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Story */}
        <section className="mb-16 animate-fade-in">
          <Card className="bg-white/70 border-wedding-gold/30 max-w-4xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="wedding-elegant text-4xl font-bold text-wedding-deep-rose mb-6">
                    Наша история
                  </h2>
                  <p className="wedding-modern text-lg text-wedding-deep-rose/90 leading-relaxed mb-4">
                    Мы познакомились весной 2020 года в парке, где оба
                    выгуливали собак. Случайная встреча переросла в долгие
                    прогулки, разговоры до утра и понимание того, что мы нашли
                    друг друга.
                  </p>
                  <p className="wedding-modern text-lg text-wedding-deep-rose/90 leading-relaxed">
                    Спустя четыре года мы готовы сделать следующий шаг и сказать
                    "да" перед лицом наших самых близких людей.
                  </p>
                </div>
                <div className="relative">
                  <div
                    className="w-full h-80 rounded-2xl bg-cover bg-center shadow-lg"
                    style={{
                      backgroundImage: `url('/img/f7103176-96de-4192-90ca-c5630e7811cf.jpg')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-wedding-rose/20 rounded-2xl"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Wedding Details */}
        <section className="mb-16 animate-scale-in">
          <Card className="bg-white/70 border-wedding-sage/30 max-w-4xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <h2 className="wedding-elegant text-4xl font-bold text-wedding-deep-rose mb-8 text-center">
                Детали торжества
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon
                      name="Church"
                      className="text-wedding-rose mt-1"
                      size={28}
                    />
                    <div>
                      <h3 className="wedding-elegant text-2xl font-semibold text-wedding-deep-rose mb-2">
                        Церемония
                      </h3>
                      <p className="wedding-modern text-wedding-deep-rose/80 mb-1">
                        📅 20 июля 2024, 15:00
                      </p>
                      <p className="wedding-modern text-wedding-deep-rose/80 mb-1">
                        📍 Дворец бракосочетания №1
                      </p>
                      <p className="wedding-modern text-wedding-deep-rose/80">
                        🏠 ул. Свадебная, 25
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon
                      name="Utensils"
                      className="text-wedding-rose mt-1"
                      size={28}
                    />
                    <div>
                      <h3 className="wedding-elegant text-2xl font-semibold text-wedding-deep-rose mb-2">
                        Банкет
                      </h3>
                      <p className="wedding-modern text-wedding-deep-rose/80 mb-1">
                        📅 20 июля 2024, 17:00
                      </p>
                      <p className="wedding-modern text-wedding-deep-rose/80 mb-1">
                        📍 Ресторан "Романтика"
                      </p>
                      <p className="wedding-modern text-wedding-deep-rose/80">
                        🏠 ул. Праздничная, 12
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div
                    className="w-full h-64 rounded-2xl bg-cover bg-center shadow-lg"
                    style={{
                      backgroundImage: `url('/img/f68a435b-2e86-419a-96fb-61aaab36d058.jpg')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-wedding-sage/20 rounded-2xl"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Dress Code */}
        <section className="mb-16 animate-fade-in">
          <Card className="bg-white/70 border-wedding-blush/30 max-w-3xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Icon
                  name="Shirt"
                  className="text-wedding-rose mx-auto mb-4"
                  size={48}
                />
                <h2 className="wedding-elegant text-4xl font-bold text-wedding-deep-rose mb-4">
                  Дресс-код
                </h2>
                <p className="wedding-modern text-xl text-wedding-deep-rose/80">
                  Полуформальный / Коктейльный
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="wedding-elegant text-2xl font-semibold text-wedding-deep-rose mb-4">
                    Рекомендуемые цвета
                  </h3>
                  <div className="flex justify-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-wedding-rose rounded-full border-2 border-wedding-deep-rose"></div>
                    <div className="w-12 h-12 bg-wedding-sage rounded-full border-2 border-wedding-deep-rose"></div>
                    <div className="w-12 h-12 bg-wedding-gold rounded-full border-2 border-wedding-deep-rose"></div>
                    <div className="w-12 h-12 bg-wedding-blush rounded-full border-2 border-wedding-deep-rose"></div>
                  </div>
                  <p className="wedding-modern text-wedding-deep-rose/80">
                    Розовый, шалфей, золотой, персиковый
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="wedding-elegant text-2xl font-semibold text-wedding-deep-rose mb-4">
                    Избегайте
                  </h3>
                  <div className="flex justify-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-full border-2 border-wedding-deep-rose"></div>
                    <div className="w-12 h-12 bg-black rounded-full border-2 border-wedding-deep-rose"></div>
                  </div>
                  <p className="wedding-modern text-wedding-deep-rose/80">
                    Белый и черный цвета
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* RSVP Section */}
        <section className="mb-16 animate-scale-in">
          <Card className="bg-white/70 border-wedding-rose/30 max-w-3xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Icon
                  name="Mail"
                  className="text-wedding-rose mx-auto mb-4"
                  size={48}
                />
                <h2 className="wedding-elegant text-4xl font-bold text-wedding-deep-rose mb-4">
                  Пожалуйста, подтвердите участие
                </h2>
                <p className="wedding-modern text-lg text-wedding-deep-rose/80">
                  Ваш ответ поможет нам лучше организовать торжество
                </p>
              </div>

              {!isSubmitted ? (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block wedding-modern text-wedding-deep-rose mb-2 font-medium">
                        Имя и фамилия *
                      </label>
                      <Input
                        value={rsvpData.name}
                        onChange={(e) =>
                          setRsvpData({ ...rsvpData, name: e.target.value })
                        }
                        className="bg-white/90 border-wedding-rose/30 focus:border-wedding-rose"
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block wedding-modern text-wedding-deep-rose mb-2 font-medium">
                        Количество гостей *
                      </label>
                      <Input
                        value={rsvpData.guests}
                        onChange={(e) =>
                          setRsvpData({ ...rsvpData, guests: e.target.value })
                        }
                        className="bg-white/90 border-wedding-rose/30 focus:border-wedding-rose"
                        placeholder="Например: 2"
                        type="number"
                        min="1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block wedding-modern text-wedding-deep-rose mb-2 font-medium">
                      Будете ли вы присутствовать? *
                    </label>
                    <select
                      value={rsvpData.attendance}
                      onChange={(e) =>
                        setRsvpData({ ...rsvpData, attendance: e.target.value })
                      }
                      className="w-full p-3 rounded-md bg-white/90 border border-wedding-rose/30 focus:border-wedding-rose wedding-modern"
                    >
                      <option value="">Выберите вариант</option>
                      <option value="yes">Да, с удовольствием!</option>
                      <option value="maybe">Пока не знаю</option>
                      <option value="no">К сожалению, не смогу</option>
                    </select>
                  </div>

                  <div>
                    <label className="block wedding-modern text-wedding-deep-rose mb-2 font-medium">
                      Особые пожелания к питанию
                    </label>
                    <Input
                      value={rsvpData.dietary}
                      onChange={(e) =>
                        setRsvpData({ ...rsvpData, dietary: e.target.value })
                      }
                      className="bg-white/90 border-wedding-rose/30 focus:border-wedding-rose"
                      placeholder="Вегетарианское, аллергии и т.д."
                    />
                  </div>

                  <div>
                    <label className="block wedding-modern text-wedding-deep-rose mb-2 font-medium">
                      Любимая песня для танца
                    </label>
                    <Input
                      value={rsvpData.song}
                      onChange={(e) =>
                        setRsvpData({ ...rsvpData, song: e.target.value })
                      }
                      className="bg-white/90 border-wedding-rose/30 focus:border-wedding-rose"
                      placeholder="Укажите песню, под которую хотели бы потанцевать"
                    />
                  </div>

                  <div>
                    <label className="block wedding-modern text-wedding-deep-rose mb-2 font-medium">
                      Пожелания молодоженам
                    </label>
                    <Textarea
                      value={rsvpData.wishes}
                      onChange={(e) =>
                        setRsvpData({ ...rsvpData, wishes: e.target.value })
                      }
                      className="bg-white/90 border-wedding-rose/30 focus:border-wedding-rose"
                      placeholder="Поделитесь своими теплыми пожеланиями..."
                      rows={4}
                    />
                  </div>

                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-wedding-rose hover:bg-wedding-deep-rose text-white wedding-modern font-semibold py-3 text-lg"
                    disabled={!rsvpData.name || !rsvpData.attendance}
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить подтверждение
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Icon
                    name="CheckCircle"
                    className="text-wedding-rose mx-auto mb-4"
                    size={64}
                  />
                  <h3 className="wedding-elegant text-2xl font-bold text-wedding-deep-rose mb-4">
                    Спасибо за ваш ответ!
                  </h3>
                  <p className="wedding-modern text-lg text-wedding-deep-rose/80">
                    Мы получили ваше подтверждение. Ждем вас на нашем торжестве!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Gift Registry */}
        <section className="mb-16 animate-fade-in">
          <Card className="bg-white/70 border-wedding-gold/30 max-w-3xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Icon
                  name="Gift"
                  className="text-wedding-rose mx-auto mb-4"
                  size={48}
                />
                <h2 className="wedding-elegant text-4xl font-bold text-wedding-deep-rose mb-4">
                  О подарках
                </h2>
              </div>
              <div className="wedding-modern text-lg text-wedding-deep-rose/90 leading-relaxed text-center">
                <p className="mb-6">
                  Самый дорогой подарок для нас — это ваше присутствие на нашем
                  празднике! Но если вы хотите сделать нам подарок, мы будем
                  благодарны за:
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="bg-wedding-soft-pink/50 rounded-lg p-6">
                    <Icon
                      name="Home"
                      className="text-wedding-rose mb-3"
                      size={32}
                    />
                    <h3 className="wedding-elegant text-xl font-semibold text-wedding-deep-rose mb-2">
                      Для дома
                    </h3>
                    <p className="text-wedding-deep-rose/80">
                      Мы создаем наш первый совместный дом и будем рады
                      предметам для быта и уюта.
                    </p>
                  </div>
                  <div className="bg-wedding-sage/20 rounded-lg p-6">
                    <Icon
                      name="MapPin"
                      className="text-wedding-rose mb-3"
                      size={32}
                    />
                    <h3 className="wedding-elegant text-xl font-semibold text-wedding-deep-rose mb-2">
                      Для путешествий
                    </h3>
                    <p className="text-wedding-deep-rose/80">
                      Мы мечтаем о медовом месяце и будем благодарны за вклад в
                      наше путешествие.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="mb-16 animate-scale-in">
          <Card className="bg-white/70 border-wedding-blush/30 max-w-3xl mx-auto shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Icon
                  name="Phone"
                  className="text-wedding-rose mx-auto mb-4"
                  size={48}
                />
                <h2 className="wedding-elegant text-4xl font-bold text-wedding-deep-rose mb-4">
                  Контактная информация
                </h2>
                <p className="wedding-modern text-lg text-wedding-deep-rose/80">
                  Если у вас есть вопросы, не стесняйтесь обращаться к нам
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-wedding-rose/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" className="text-wedding-rose" size={32} />
                  </div>
                  <h3 className="wedding-elegant text-2xl font-semibold text-wedding-deep-rose mb-2">
                    Александра
                  </h3>
                  <p className="wedding-modern text-wedding-deep-rose/80 mb-2">
                    📞 +7 (999) 123-45-67
                  </p>
                  <p className="wedding-modern text-wedding-deep-rose/80">
                    💌 alexandra@email.com
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-wedding-rose/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" className="text-wedding-rose" size={32} />
                  </div>
                  <h3 className="wedding-elegant text-2xl font-semibold text-wedding-deep-rose mb-2">
                    Дмитрий
                  </h3>
                  <p className="wedding-modern text-wedding-deep-rose/80 mb-2">
                    📞 +7 (999) 765-43-21
                  </p>
                  <p className="wedding-modern text-wedding-deep-rose/80">
                    💌 dmitriy@email.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Message */}
        <section className="text-center animate-fade-in">
          <Card className="bg-white/80 border-wedding-rose/30 max-w-2xl mx-auto shadow-xl">
            <CardContent className="p-12">
              <Icon
                name="HeartHandshake"
                className="text-wedding-rose mx-auto mb-6"
                size={64}
              />
              <h2 className="wedding-elegant text-4xl font-bold text-wedding-deep-rose mb-6">
                Мы ждем вас!
              </h2>
              <p className="wedding-modern text-xl text-wedding-deep-rose/90 leading-relaxed mb-8">
                Наша свадьба станет по-настоящему особенной благодаря
                присутствию самых дорогих нам людей. Мы не можем дождаться,
                чтобы отпраздновать этот день вместе с вами!
              </p>
              <Separator className="bg-wedding-rose/30 mb-8" />
              <p className="wedding-script text-4xl text-wedding-rose mb-4">
                С любовью,
              </p>
              <p className="wedding-script text-4xl text-wedding-deep-rose">
                Александра и Дмитрий 💕
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
