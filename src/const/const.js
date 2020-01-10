export const OPTIONS = {
    method: "POST",
        mode: "cors",
        headers: {
          "Content-Type" : "application/json"
        },
}

export const CLASS = [
  {
    CLASS: 'Первый класс',
    CLASS_NUMBER: '1'
  },
  {
    CLASS: 'Второй класс',
    CLASS_NUMBER: '2'
  },
  {
    CLASS: 'Третий класс',
    CLASS_NUMBER: '3'
  },
  {
    CLASS: 'Четвертый класс',
    CLASS_NUMBER: '4'
  },
  {
    CLASS: 'Пятый класс',
    CLASS_NUMBER: '5'
  },
  {
    CLASS: 'Шестой класс',
    CLASS_NUMBER: '6'
  },
  {
    CLASS: 'Седьмой класс',
    CLASS_NUMBER: '7'
  },
  {
    CLASS: 'Восьмой класс',
    CLASS_NUMBER: '8'
  },
  {
    CLASS: 'Девятый класс',
    CLASS_NUMBER: '9'
  },
  {
    CLASS: 'Десятый класс',
    CLASS_NUMBER: '10'
  },
  {
    CLASS: 'Одиннадцатый класс',
    CLASS_NUMBER: '11'
  },
]

export const STATUS = {
  USER_WAS_CREATED: 'Пользователь создан',
  USER_LOG_OUT: 'USER_LOG_OUT'
}

export const INSTRUCTION = `Решите задачу и впишите свой ответ в поле ниже.<br/>
Ответ, который требуется ввести в поле, более точно указан в условии задачи.<br/>
Затем нажмите кнопку "Решил!!!"<br/>
Если Вы не можете решить задачу, нажимайте кнопку "Посмотреть ответ",<br/>
и вы получите развернутое решение задачи,
при этом данная задача не будет зачтена как решенная.<br/>
Также Вы можете пропустить задачу, вернувшись к ней позже.<br/>
Для этого нажимайте кнопку "Следующая"`