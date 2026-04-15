import { useRef, useState } from "react";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";
import { useInView } from "../../hooks/useInView";

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const { ref: boxRef, inView: boxVisible } = useInView(0.1);

    const validate = () => {
        const { name, email, message } = form.current;
        const newErrors = {};
        if (!name.value.trim()) newErrors.name = "이름을 입력해 주세요.";
        if (!email.value.trim()) {
            newErrors.email = "이메일을 입력해 주세요.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            newErrors.email = "올바른 이메일 형식이 아닙니다.";
        }
        if (!message.value.trim()) newErrors.message = "메시지를 입력해 주세요.";
        return newErrors;
    };

    const onSendForm = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setLoading(true);

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
            )
            .then(() => {
                alert("메일이 성공적으로 전송되었습니다.");
                form.current.reset();
                setErrors({});
            })
            .catch(() => {
                alert("메일 전송에 실패했습니다.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
      <div className={`page-enter ${styles.container}`}>
        <div ref={boxRef} className={styles.box}>
          {/* Left */}
          <div className={`${styles.formSection} anim-left ${boxVisible ? 'visible' : ''}`}>
            <h2>Contact Us</h2>
            <p className="text-kr">
              궁금한 점이 있으시다면 언제든 편하게 연락해 주세요.
            </p>

            <form onSubmit={onSendForm} ref={form} noValidate>
              <div className={styles.fieldWrapper}>
                <input name="name" type="text" placeholder="Name" />
                {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
              </div>
              <div className={styles.fieldWrapper}>
                <input name="email" type="email" placeholder="Email" />
                {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
              </div>
              <div className={styles.fieldWrapper}>
                <textarea name="message" placeholder="Message" />
                {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
              </div>
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>

          {/* Right */}
          <div className={`${styles.infoSection} anim-right ${boxVisible ? 'visible' : ''}`}
            style={{ '--delay': '0.15s' }}
          >
            <div>
              <h4>Social / Archive</h4>
              <p className={styles.socialLinks}>
                <a
                  href="https://github.com/jeonnni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Main Github</strong> (Present)
                </a>
                <br />
                <a
                  href="https://github.com/ol7mi"
                  target="_blank"
                  className={styles.oldLink}
                  rel="noopener noreferrer"
                >
                  <strong>Project Archive</strong> (2022-2024)
                </a>
              </p>
            </div>

            <div>
              <h4>Let's talk</h4>
              <p>
                010-5503-3025
                <br />
                ymymda0711@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;
