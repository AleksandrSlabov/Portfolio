import "./Contact.scss";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userComment, setUserComment] = useState("");
  const [formState, setFormState] = useState(true);
  const [submit, setSubmit] = useState(false);
  return (
    <div className="contContact flexSpaceAlCenterColumn  ">
      <h2>
        {formState === true ? "Напиши мне!" : "Форма успешно отправлена !"}
      </h2>

      {formState === true ? (
        <form>
          <label htmlFor="name">Ваше Имя!</label>
          <input
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setNameError(false);
            }}
            id="name"
            type="text"
            maxLength={20}
            name="userName"
            required
            placeholder="Введите Имя "
          />{" "}
          {nameError && <span className="error-message">Введите имя</span>}
          <label htmlFor="email">Введите email</label>
          <input
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
              setEmailError(false);
            }}
            id="email"
            type="email"
            maxLength={50}
            name="userEmail"
            placeholder="Введите email"
            required
          />
          {emailError && (
            <span className="error-message">Некорректный Email</span>
          )}
          <div className="contMessage flexColumn">
            <label htmlFor="message">Коментарий</label>
            <textarea
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              maxLength={1000}
              name="userComment"
              placeholder="Введите коментарий "
              required
              id="message"
            />
          </div>
          <button
            onClick={async (e) => {
              e.preventDefault();
              if (submit) return;

              if (!userName) {
                setNameError(true);
                return;
              }

              if (!/^\S+@\S+\.\S+$/.test(userEmail)) {
                setEmailError(true);
                return;
              }

              const date = new Date();

              const message = ` Сообщение  от  ${date.toLocaleDateString("ru", { day: "numeric", month: "long", year: "numeric" })}
              Имя : ${userName}
              Email:${userEmail}
              Коментарий: ${userComment || null}`;
              setSubmit(true);
              try {
                const response = await fetch(
                  `https://telegram-secret.vercel.app/api/send`,
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message }),
                  },
                );
                if (!response.ok) {
                  throw new Error("Ошибка отправки ");
                }

                setFormState(false);
              } catch (error) {
                console.error(error);
                toast.error("Слишком много запросов. Попробуйте позже.");
              } finally {
                setSubmit(false);
              }
            }}
            disabled={submit}
          >
            {submit ? "Отправка..." : "Отправить"}
          </button>
        </form>
      ) : (
        <div className="contModalForm flexColumnCenterCentr ">
          <p className="textForm">
            {userName}! {""}
            форма успешно отправлена в Telegram бота , я дам вам ответ в
            ближайшее время на почту которую вы указали {userEmail}.
          </p>
          <div className="contbtn flexColumnAliCentr">
            <button
              onClick={() => {
                (setUserComment(""), setUserEmail(""), setUserName(""));
                setFormState(true);
              }}
            >
              {" "}
              Отправить еще одну форму !
            </button>
            <p>Спасибо за обратную связь!</p>
          </div>
        </div>
      )}

      <ul>
        <li>
          <a href="https://t.me/sancheszzzzz" className="">
            <FaTelegramPlane className="telegram" />
          </a>
        </li>
        <li>
          <a href="https://github.com/AleksandrSlabov">
            <FaGithub className="gitHub" />
          </a>
        </li>
        <li>
          <a>
            <MdOutlineAlternateEmail className="email" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
