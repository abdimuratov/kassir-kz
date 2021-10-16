<template>
  <div class="footer">
    <div class="topSection">
      <div class="topSection-info">
        <div class="footer-title">Подпишитесь на рассылку</div>

        <div class="topSection-description">
          Ежемесячная рассылка главных новостей, мероприятий и анонсов.
        </div>
      </div>
      <form class="topSection-mailing">
        <input
          type="email"
          name="email"
          id=""
          placeholder="Почта"
          class="input"
        />
        <button type="button" class="button">Подписаться</button>
      </form>
    </div>
    <div class="bodySection">
      <div class="bodySection-info">
        <div class="footer-title">Скачайте приложение</div>

        <div class="bodySection-description">
          Десятки людей скачивают kassir.kz ежедневно и улучшают свою жизнь.
        </div>
        <div>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=kz.spaceduck.kassirkz&hl=ru&gl=US"
            class="googlePlay"
            ><i class="icon icon-googlePlay"></i
          ></a>

          <a
            target="_blank"
            href="https://getapp.cc/app/1311457443"
            class="appleStore"
            ><i class="icon icon-appleStore"></i
          ></a>
        </div>
      </div>
      <div class="bodySection-links">
        <div class="bodySection-links-card">
          <div class="services footer-title">Сервис</div>

          <a href="#" class="bodySection-links-item">Покупка билетов</a>

          <a href="#" class="bodySection-links-item">Возврат билетов</a>

          <a href="#" class="bodySection-links-item">Служба поддержки</a>

          <a href="#" class="bodySection-links-item">О сервисе</a>

          <a href="#" class="bodySection-links-item">Новости</a>
        </div>

        <div class="bodySection-links-card">
          <div class="organizers footer-title">Организаторам</div>

          <a href="#" class="bodySection-links-item">Условия участия</a>

          <a href="#" class="bodySection-links-item">Билетная система</a>

          <a href="#" class="bodySection-links-item">Корпоративным клиентам</a>
        </div>

        <div class="bodySection-links-card">
          <div class="socials footer-title">Соцсети</div>

          <a
            target="_blank"
            href="https://www.instagram.com/kassir.kz/"
            class="bodySection-links-item"
            >Инстаграм</a
          >

          <a
            target="_blank"
            href="https://www.facebook.com/Kassirkz/"
            class="bodySection-links-item"
            >Фейсбук</a
          >

          <a
            target="_blank"
            href="https://vk.com/kzkassir"
            class="bodySection-links-item"
            >ВКонтакте</a
          >
        </div>
      </div>
    </div>

    <div class="bottomSection">
      <div class="bottomSection-selectors">
        <div class="bottomSection-copyright">© 2005–{{ currentYear }} Kassir.kz</div>

        <select>
          <option selected value="ru">РУ</option>
          <option value="en">EN</option>
          <option value="kz">ҚАЗ</option>
        </select>

        <select>
          <option selected value="almaty">Алматы</option>
          <option value="astana">Астана</option>
          <option value="shymkent">Шымкент</option>
        </select>
      </div>
      <div class="bottomSection-links">
        <a href="#">Публичная оферта</a>

        <a href="#">Политика конфиденциальности</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear().toString()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 40px 92px 20px 92px;
  background: #f8f8f8;
  
  select {
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='5' viewBox='0 0 10 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.209209 0.183058C0.488155 -0.0610195 0.940415 -0.0610195 1.21936 0.183058L5 3.49112L8.78064 0.183058C9.05958 -0.0610195 9.51184 -0.0610195 9.79079 0.183058C10.0697 0.427136 10.0697 0.822864 9.79079 1.06694L5.50508 4.81694C5.22613 5.06102 4.77387 5.06102 4.49492 4.81694L0.209209 1.06694C-0.0697365 0.822864 -0.0697365 0.427136 0.209209 0.183058Z' fill='%23959595'/%3E%3C/svg%3E%0A");
  }

  &-title {
    font-size: 20px;
    font-weight: 700;
  }
}

.topSection {
  &-description {
    margin-top: 16px;
    font-size: 18px;
  }

  &-mailing {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
}

.input {
  max-width: 386px;
  padding: 16px 18px;
  margin-right: 10px;
  border: 0.5px solid #808080;
  border-radius: 8px;
  background-color: transparent;

  &::placeholder {
    font-size: 16px;
    color: #000;
  }
}

.button {
  padding: 16px 57px 18px 57px;
  border: 0;
  border-radius: 8px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.bodySection {
  margin-top: 40px;
  margin-bottom: 85px;
  padding-top: 43px;
  border-top: 1px solid #c6c6c6;

  &-title {
    font-size: 20px;
    font-weight: 700;
  }

  &-description {
    margin: 16px 0 24px 0;
    font-size: 18px;
    max-width: 404px;
  }

  &-links {
    &-card {
      display: flex;
      flex-direction: column;

      a {
        text-decoration: none;
      }
    }

    &-item {
      margin-top: 12px;
      color: #7c7c7c;

      &:first-child {
        margin-top: 20px;
      }
    }
  }
}

.googlePlay {
  margin-right: 13px;
}

.bottomSection {
  font-size: 14px;
  color: #7c7c7c;

  &-selectors {
    display: flex;
    flex-direction: row;
    align-items: center;

    select {
      font-size: 14px;
      color: #7c7c7c;
      background-color: transparent;
      border: 0;

      &:last-child {
        margin-left: 15px;
      }
    }
  }

  &-copyright {
    margin-right: 20px;
  }

  &-links {
    display: flex;
    flex-direction: row;

    a {
      color: inherit;
      text-decoration: none;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}

@media (min-width: 1280px) {
  .topSection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &-mailing {
      margin-left: 40px;
    }
  }

  .input {
    width: 100%;
  }

  .bodySection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &-links {
      display: flex;
      flex-direction: row;

      &-card {
        margin-right: 72px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .bottomSection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>