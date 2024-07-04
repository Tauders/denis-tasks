# Задача: "PlantIndex"

## Цель

Вывести сгруппированные по семействам и роду растения из списка, переданного на вход.

## Описание 

Программа является консольным приложением, которое получает на вход список с названиями растений, а так же путь, куда программа должна вывести результат.
Рядом с исполняемым файлом хранится текстовый файл - "справочник". В справочнике описаны растения.
Результат представляет из себя текстовый файл, в который выведены растения, с их описаниями из справочника. При этом растения должны быть сгруппированы по семействам и роду.

## Справочник

Справочник - текстовый файл под названием index.txt, который находится в одной директорией с исполняемым файлом.

### Формат справочника

Каждое растение описано на отдельной строке и представлено следующей структурой:

```
Семейство;Род;Вид;Описание
```

**Обратить внимание:** разделителем является `;`, но при этом в конце описания будет только перенос строки.
В описании символ `;` использоваться не будет.

## Входные данные

Команда запускается с аргументом командным строки: путём до файла с списком растений и путём, куда надо вывести результат. Все пути абсолютные или относительные.

```
PlantIndexer.exe input.txt result.txt
```

### Формат входного списка

На каждой отдельной строке указывается вид запрашиваемого растения.

## Выходные данные

Вывод должен быть в текстовый файл, по пути, который был передан на вход программе.
Вывод должен представлять из себя древесную структуру, повторяющую структуру классификации растений.

### Формат выходных данных

```
Семейство %семейство1%
    Род %род1%
        %вид1%
            %описание вида1%

    Род %род2%
        %вид2%
            %описание вида2%
        %вид3%
            %описание вида3%
        

Семейство %семейство2%
    Род %род3%
        %вид4%
            %описание вида4%        
```

Каждый новый уровень вложенности, должен иметь отступ в четыре пробела, от предыдущего уровня.
Все растения в выводе, должны быть сгруппированы по семействам и родам.
Между разными семействами должно быть две пустые строки. 
Между разными родами должна быть одна пустая строка.
Между видами не должно быть пустых строк.

## Пример

### Запуск программы

```
PlantIndexer.exe yagodki.txt C:\SomeDir\KudrPes\tsvetochki.txt
```

### Пример словаря

```
Астровые;Белокопытник;Белокопытник душистый;Многолетнее травянистое растение. Цветки розово-белые, пахучие.
Астровые;Белокопытник;Белокопытник Татеваки;Назван в честь японского ботаника Мисао Татеваки (1899—1976, англ. Tatewaki, Misao).
Пандановые;Пандан;Пандан кровельный;Вечнозелёное многолетнее растение высотой до 1,5 метра. Мякоть плодов съедобна. 
Астровые;Подсолнечник;Подсолнечник клубненосный;Растение известно также под названием «земляная груша», «иерусалимский артишок», «бульба», «бульва», «бараболя».
Саговниковые;Саговник;Саговник гребенчатый;Вечнозелёное древовидное растение.Листья тёмно-зелёные или серо-зелёные, полуглянцевые, длиной 150-240 см.
```

### Пример входного файла

```
Пандан кровельный
Белокопытник душистый
Белокопытник Татеваки
Подсолнечник клубненосный
```

### Пример вывода

```
Семейство Пандановые
    Род Пандан
        Пандан кровельный
            Вечнозелёное многолетнее растение высотой до 1,5 метра. Мякоть плодов съедобна.


Семейство Астровые
    Род Белокопытник
        Белокопытник душистый
            Многолетнее травянистое растение. Цветки розово-белые, пахучие.
        Белокопытник Татеваки
            Назван в честь японского ботаника Мисао Татеваки (1899—1976, англ. Tatewaki, Misao).

    Род Подсолнечник
        Подсолнечник клубненосный
            Растение известно также под названием «земляная груша», «иерусалимский артишок», «бульба», «бульва», «бараболя».
```