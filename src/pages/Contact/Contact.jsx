import { useRef, useState } from "react";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const onSendForm = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm("service_gduj5vr", "template_n8wlzei", form.current, {
                publicKey: "HqVlQpX6_V2zfwExu",
            })
            .then(() => {
                alert("메일이 성공적으로 전송되었습니다.");
                form.current.reset();
            })
            .catch(() => {
                alert("메일 전송에 실패했습니다.");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
      <div className={styles.container}>
        <div className={styles.box}>
          {/* Left */}
          <div className={styles.formSection}>
            <h2>Contact Us</h2>
            <p className="text-kr">
              궁금한 점이 있으시다면 언제든 편하게 연락해 주세요.
            </p>

            <form onSubmit={onSendForm} ref={form}>
              <input name="name" type="text" placeholder="Name" />
              <input name="email" type="text" placeholder="Email" />
              <textarea name="message" placeholder="Message" />
              <button type="submit">{loading ? "Sending..." : "Send"}</button>
            </form>
          </div>

          {/* Right */}
          <div className={styles.infoSection}>
            <div>
              <h4>Social / Archive</h4>
              <p className={styles.socialLinks}>
                <a href="https://github.com/jeonnni" target="_blank">
                  <strong>Main Github</strong> (Present)
                </a>
                <br />
                <a
                  href="https://github.com/ol7mi"
                  target="_blank"
                  className={styles.oldLink}
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
}

export default Contact;