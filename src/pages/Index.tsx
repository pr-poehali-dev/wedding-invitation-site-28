import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [rsvpData, setRsvpData] = useState({
    name: "",
    attendance: "",
    guests: "",
    dietary: "",
    wishes: "",
  });

  const colorOptions = [
    {
      name: "Бежевый",
      color: "bg-vintage-beige",
      border: "border-vintage-brown",
    },
    {
      name: "Коричневый",
      color: "bg-vintage-brown",
      border: "border-vintage-beige",
    },
    {
      name: "Зеленый",
      color: "bg-vintage-green",
      border: "border-vintage-brown",
    },
    {
      name: "Теплый бежевый",
      color: "bg-vintage-warm",
      border: "border-vintage-brown",
    },
  ];

  const handleColorToggle = (colorName: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorName)
        ? prev.filter((c) => c !== colorName)
        : [...prev, colorName],
    );
  };

  return (
    <div className="min-h-screen bg-vintage-beige">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/img/6f5d8b2b-46b7-441c-b275-0b42df92c80d.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="bg-vintage-warm/30 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto border border-vintage-brown/20">
            <h1 className="vintage-script text-6xl font-bold text-vintage-brown mb-4">
              Анна & Михаил
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <Icon name="Heart" className="text-vintage-green" size={24} />
              <p className="vintage-elegant text-2xl text-vintage-dark">
                15 августа 2024
              </p>
              <Icon name="Heart" className="text-vintage-green" size={24} />
            </div>
            <p className="vintage-modern text-lg text-vintage-dark/80">
              Приглашаем вас разделить с нами радость венчания и торжества
            </p>
          </div>
        </section>

        {/* Greeting Section */}
        <section className="mb-16 animate-scale-in">
          <Card className="bg-vintage-warm/20 border-vintage-brown/30 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Church" className="text-vintage-green" size={32} />
                <h2 className="vintage-elegant text-3xl font-bold text-vintage-brown">
                  Дорогие друзья!
                </h2>
              </div>
              <p className="vintage-modern text-lg text-vintage-dark/90 leading-relaxed">
                Мы с великой радостью приглашаем вас на наше венчание и
                последующее празднование. Этот день станет особенным для нас, и
                мы хотим разделить его с самыми близкими и дорогими людьми. Ваше
                присутствие сделает этот момент еще более значимым и
                запоминающимся.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Gifts Section */}
        <section className="mb-16 animate-fade-in">
          <Card className="bg-vintage-green/10 border-vintage-green/30 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Gift" className="text-vintage-brown" size={32} />
                <h2 className="vintage-elegant text-3xl font-bold text-vintage-brown">
                  О подарках
                </h2>
              </div>
              <p className="vintage-modern text-lg text-vintage-dark/90 leading-relaxed">
                Самый дорогой подарок для нас — это ваше присутствие на нашем
                торжестве. Если вы все же хотите сделать нам подарок, мы будем
                благодарны за денежное пожертвование, которое поможет нам в
                создании нашего семейного очага.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Color Palette Section */}
        <section className="mb-16 animate-scale-in">
          <Card className="bg-vintage-warm/20 border-vintage-brown/30 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Palette" className="text-vintage-green" size={32} />
                <h2 className="vintage-elegant text-3xl font-bold text-vintage-brown">
                  Цветовая палитра одежды
                </h2>
              </div>
              <p className="vintage-modern text-lg text-vintage-dark/90 mb-6">
                Мы будем рады, если вы выберете одежду в нашей цветовой палитре:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {colorOptions.map((color) => (
                  <div
                    key={color.name}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedColors.includes(color.name)
                        ? `${color.border} bg-vintage-brown/5`
                        : "border-vintage-brown/20 hover:border-vintage-brown/40"
                    }`}
                    onClick={() => handleColorToggle(color.name)}
                  >
                    <div
                      className={`w-12 h-12 rounded-full ${color.color} mx-auto mb-2`}
                    />
                    <p className="text-center vintage-modern text-sm text-vintage-dark">
                      {color.name}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Schedule Section */}
        <section className="mb-16 animate-fade-in">
          <Card className="bg-vintage-green/10 border-vintage-green/30 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Clock" className="text-vintage-brown" size={32} />
                <h2 className="vintage-elegant text-3xl font-bold text-vintage-brown">
                  Расписание мероприятия
                </h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-vintage-brown text-vintage-beige rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    14:00
                  </div>
                  <div>
                    <h3 className="vintage-elegant text-xl font-semibold text-vintage-brown mb-2">
                      Венчание
                    </h3>
                    <p className="vintage-modern text-vintage-dark/90">
                      Свято-Троицкий храм, ул. Церковная, 15
                    </p>
                  </div>
                </div>
                <Separator className="bg-vintage-brown/30" />
                <div className="flex items-start gap-4">
                  <div className="bg-vintage-green text-vintage-beige rounded-full w-12 h-12 flex items-center justify-center font-bold">
                    16:00
                  </div>
                  <div>
                    <h3 className="vintage-elegant text-xl font-semibold text-vintage-brown mb-2">
                      Банкет
                    </h3>
                    <p className="vintage-modern text-vintage-dark/90">
                      Ресторан "Усадьба", ул. Садовая, 42
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Photo Section */}
        <section className="mb-16 animate-scale-in">
          <Card className="bg-vintage-warm/20 border-vintage-brown/30 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Camera" className="text-vintage-green" size={32} />
                <h2 className="vintage-elegant text-3xl font-bold text-vintage-brown">
                  Фотосъемка
                </h2>
              </div>
              <p className="vintage-modern text-lg text-vintage-dark/90 leading-relaxed">
                Наш фотограф будет запечатлевать самые яркие моменты торжества.
                Мы с удовольствием поделимся с вами фотографиями после
                мероприятия. Также приветствуем ваши личные фотографии — они
                помогут сохранить воспоминания об этом особенном дне.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Location Section */}
        <section className="mb-16 animate-fade-in">
          <Card className="bg-vintage-green/10 border-vintage-green/30 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="MapPin" className="text-vintage-brown" size={32} />
                <h2 className="vintage-elegant text-3xl font-bold text-vintage-brown">
                  Место проведения
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-vintage-warm/30 rounded-lg p-6">
                  <h3 className="vintage-elegant text-xl font-semibold text-vintage-brown mb-3">
                    Венчание
                  </h3>
                  <p className="vintage-modern text-vintage-dark/90 mb-2">
                    📍 Свято-Троицкий храм
                  </p>
                  <p className="vintage-modern text-vintage-dark/90 mb-2">
                    🕐 14:00 - 15:30
                  </p>
                  <p className="vintage-modern text-vintage-dark/90">
                    🚗 Парковка доступна рядом с храмом
                  </p>
                </div>
                <div className="bg-vintage-brown/5 rounded-lg p-6">
                  <h3 className="vintage-elegant text-xl font-semibold text-vintage-brown mb-3">
                    Банкет
                  </h3>
                  <p className="vintage-modern text-vintage-dark/90 mb-2">
                    📍 Ресторан "Усадьба"
                  </p>
                  <p className="vintage-modern text-vintage-dark/90 mb-2">
                    🕐 16:00 - 00:00
                  </p>
                  <p className="vintage-modern text-vintage-dark/90">
                    🚗 Собственная парковка
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* RSVP Section */}
        <section className="mb-16 animate-scale-in">
          <Card className="bg-vintage-warm/20 border-vintage-brown/30 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon
                  name="UserCheck"
                  className="text-vintage-green"
                  size={32}
                />
                <h2 className="vintage-elegant text-3xl font-bold text-vintage-brown">
                  Пожалуйста, пройдите опрос
                </h2>
              </div>
              <p className="vintage-modern text-lg text-vintage-dark/90 mb-6">
                Помогите нам лучше подготовиться к торжеству, заполнив короткую
                анкету:
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block vintage-modern text-vintage-dark mb-2">
                    Ваше имя и фамилия
                  </label>
                  <Input
                    value={rsvpData.name}
                    onChange={(e) =>
                      setRsvpData({ ...rsvpData, name: e.target.value })
                    }
                    className="bg-vintage-beige border-vintage-brown/30"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block vintage-modern text-vintage-dark mb-2">
                    Планируете ли вы присутствовать?
                  </label>
                  <select
                    value={rsvpData.attendance}
                    onChange={(e) =>
                      setRsvpData({ ...rsvpData, attendance: e.target.value })
                    }
                    className="w-full p-3 rounded-md bg-vintage-beige border border-vintage-brown/30 vintage-modern"
                  >
                    <option value="">Выберите вариант</option>
                    <option value="yes">Да, обязательно буду</option>
                    <option value="maybe">Пока не уверен(а)</option>
                    <option value="no">К сожалению, не смогу</option>
                  </select>
                </div>
                <div>
                  <label className="block vintage-modern text-vintage-dark mb-2">
                    Количество гостей (включая вас)
                  </label>
                  <Input
                    value={rsvpData.guests}
                    onChange={(e) =>
                      setRsvpData({ ...rsvpData, guests: e.target.value })
                    }
                    className="bg-vintage-beige border-vintage-brown/30"
                    placeholder="Например: 2"
                    type="number"
                  />
                </div>
                <div>
                  <label className="block vintage-modern text-vintage-dark mb-2">
                    Особые пожелания к питанию
                  </label>
                  <Input
                    value={rsvpData.dietary}
                    onChange={(e) =>
                      setRsvpData({ ...rsvpData, dietary: e.target.value })
                    }
                    className="bg-vintage-beige border-vintage-brown/30"
                    placeholder="Вегетарианское, без глютена и т.д."
                  />
                </div>
                <div>
                  <label className="block vintage-modern text-vintage-dark mb-2">
                    Пожелания молодоженам
                  </label>
                  <Textarea
                    value={rsvpData.wishes}
                    onChange={(e) =>
                      setRsvpData({ ...rsvpData, wishes: e.target.value })
                    }
                    className="bg-vintage-beige border-vintage-brown/30"
                    placeholder="Ваши теплые слова..."
                    rows={3}
                  />
                </div>
                <Button
                  className="w-full bg-vintage-brown hover:bg-vintage-dark text-vintage-beige vintage-modern font-semibold"
                  onClick={() =>
                    alert("Спасибо за ваш ответ! Мы свяжемся с вами.")
                  }
                >
                  Отправить ответ
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Section */}
        <section className="text-center animate-fade-in">
          <Card className="bg-vintage-green/10 border-vintage-green/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Icon
                name="HeartHandshake"
                className="text-vintage-brown mx-auto mb-4"
                size={48}
              />
              <h2 className="vintage-elegant text-3xl font-bold text-vintage-brown mb-4">
                Ждем вас!
              </h2>
              <p className="vintage-modern text-lg text-vintage-dark/90 leading-relaxed">
                Наш день станет незабываемым благодаря вашему присутствию. Мы с
                нетерпением ждем встречи с вами и готовы подарить вам
                незабываемые моменты радости и веселья.
              </p>
              <Separator className="bg-vintage-brown/30 my-6" />
              <p className="vintage-script text-2xl text-vintage-brown">
                С любовью, Анна и Михаил ❤️
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
