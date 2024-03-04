import './SignUp.css';

function Modal() {
    return (
        <div className="PassWdMismatch">
            <p id="PopupText">이메일 또는 비밀번호가 틀렸습니다.</p>
            <button id="PopupButton">확인</button>
        </div>
    )
}