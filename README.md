# Работа с Git
[Основные команды](#основные-команды)  
[Настройки конфигурации](#настройки-конфигурации)  
[Индексирование файлов](#индексирование-файлов)  
[Добавление в репозиторий](#добавление-в-репозиторий)  
[Удаление](#удаление)  
[Переименование](#переименование)

## Основные команды
Для начала работы с гитом необходимо инициализировать проект:  
`git init`  
`git add .` - индексирование файлов рабочего католога (отслеживать текущие файлы)  
`git commit` - зафиксировать изменения и добавить их в репозиторий  
`git status` - получить статус проекта: текущая ветка, отслеживаемые и неотслеживаемые
 файлы, коммиты

## Настройки конфигурации
Основная команда для конфигурации - `git config`  
Перед началом работы рекомендуется задать имя и почту разработчика на уровне
 пользователя:
\```
git config --global user.name "AnnaBredikhina"  
git config --global user.email anna@gmail.com
\```
Команда `git config` имеет следующие флаги:  
- **--system** - конфигурация на уровне общесистемных настроек
- **--global** - конфигурация на уровне пользователя
- **--local** - конфигурация на уровне проекта (по умолчанию)
- **--list** - просмотр параметров конфигурации
- **--unset** - для удаления конкретного параметра конфигурации. Пример:
\```
git congig --unset user.name
\```

## Индексирование файлов
Под индексирование файлов подразумевается добавление их в файл index гита, то
 есть данные файлы теперь отслеживаются гитом. Команда может запускать как для 
 всех файлов рабочей директории `git add .`, так и для конкретного `git add index.html`.  
Флаги:
- **-p** - запуск команды для каждого изменённого фрагмента в файле, а не для
 всего файла
- **-A** - отслеживание всех файлов, начиная с корня проекта

## Добавление в репозиторий
Флаги для команды `git commit`:
- **-m** - для добавление сообщения к коммиту (название коммита)
- **-all** - сделать коммит сразу всех проиндексированных ранее изменённых файлов
- **-am** - объединение двух предыдущих флагов: коммит всех файлов с сообщением

## Удаление
Чтобы удалить файл можно удалить его вручную, далее сделать `add` и `commit`.  
Также можно удалить файл из рабочей директории и в index с помощью:  
\```
git rm index.html
\```
Флаги:
- *-r* - для удаления папки,
- *--cached* - удалить из index, но оставить в рабочем каталоге,
- *-f* - игнорировать предупреждения системы и совершить операцию.

## Переименование
Переименование можно сделать вручную и далее сделать `add` и `commit`. Либо
 использовать команду для переименования и добавления изменения в index
  (в примере файл index.html переименовывается в hello.html):
\```
git mv index.html hello.html
\```

[Больше информации по работе с Git](https://www.youtube.com/playlist?list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb)  
![Логотип Git](https://avatars.githubusercontent.com/u/18133?s=280&v=4)