{/* <form onSubmit={(e) => handleSubmit(e)}>
        <h1>ログインフォーム</h1>
        <hr />
        <div className='uiForm'>
          <div className='formField'>
            <label>ユーザ名</label>
            <input type='text' placeholder='ユーザ名' name='username' onChange={(e) => handleChange(e)}/>
          </div>
          <p className='errorMsg'>{formErrors.username}</p>
          <div className='formField'>
            <label>メールアドレス</label>
            <input type='text' placeholder='メールアドレス' name='mailAddress' onChange={(e) => handleChange(e)}/>
          </div>
          <p className='errorMsg'>{formErrors.mailAddress}</p>
          <div className='formField'>
            <label>パスワード</label>
            <input type='text' placeholder='パスワード' name='passward' onChange={(e) => handleChange(e)}/>
          </div>
          <p className='errorMsg'>{formErrors.password}</p>
          <button className='submitButton'>ログイン</button>
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <div className='msgOK'>ログインに成功しました</div>
          )}
        </div>
      </form> */}

//returnの中に入れれば表示される