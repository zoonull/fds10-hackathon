import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="gnb">
      <div class="logo-area">
        <h1 class="lg" >
          <a class="logo" title="Wadiz"></a>
        </h1>
      </div>
      <div class="gnb-utils">
        <ul class="gnb-user">
          <li class="ui-gnb-redirect">로그인</li>
          <li class="ui-gnb-redirect">회원가입</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .lg {
        display: block;
        position: relative;
        transition-property: opacity;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .lg > a {
        display: inline-block;
        padding: 15px;
        width: 127px;
        height: 100%;
        box-sizing: border-box;
    }

    .logo {
        display: block;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEyIiBoZWlnaHQ9IjMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik01NSAyNi41aC0uNmEuNy43IDAgMCAxLS43LS40IDguOCA4LjggMCAwIDEtLjItMi4zdi02LjNhOS44IDkuOCAwIDAgMC0uNC0zIDQuNyA0LjcgMCAwIDAtMS4zLTIuMWgtLjFjLTEuNC0xLjMtNC4yLTItNi45LTJhOS43IDkuNyAwIDAgMC01LjUgMS41aC0uMWEyLjkgMi45IDAgMSAwIDIuOC0uMyA0LjIgNC4yIDAgMCAxIDIuMi0uNWMxLjQgMCAyLjkuOSAyLjkgMy41IDAgLjIuMSAxLjEuMSAxLjN2MS43YTE4LjUgMTguNSAwIDAgMC04IDIuNiA1LjQgNS40IDAgMCAwLTIuNyA0LjUgNC4xIDQuMSAwIDAgMCAxLjMgMy4yIDUgNSAwIDAgMCAzLjUgMS4yaDEuM2wxLjgtLjMgMi45LTIuMmE0LjIgNC4yIDAgMCAwIDEuMyAxLjkgNSA1IDAgMCAwIDMuMS42IDcuMyA3LjMgMCAwIDAgMi4yLS41IDIwLjIgMjAuMiAwIDAgMCAyLjQtMS40bC0uNC0uOS0uOS4yem0tNy44LTcuM2MtLjIgMCAwIDAgMCAwVjI1Yy0uMiAwIDAgMCAwIDB2LjRsLTEuNS43Yy0yLjEuNi0zLjktLjQtMy45LTIuNHMxLjktMy44IDMuOS00LjdsMS41LS41di43em0zMC4yIDcuNmE3LjYgNy42IDAgMCAxLS40LTMuMVYuNGwtOC41IDMuMSAyLjQgMnY2LjZhMTAuNiAxMC42IDAgMCAwLTQuNy0xLjEgNy42IDcuNiAwIDAgMC02LjEgMi44IDEwLjUgMTAuNSAwIDAgMC0yLjQgNy4xIDguNiA4LjYgMCAwIDAgMiA2IDcgNyAwIDAgMCA1LjUgMi4yaC45bDEuNC0uMiAzLjYtMi40IDEuMSAyLjcgNC4yLS42IDIuNy0uMnYtMUg3OWExLjkgMS45IDAgMCAxLTEuNi0uNnptLTYuNS0xMy41djEyLjVhNS41IDUuNSAwIDAgMS0yLjEuNGwtMS43LS4zYTQgNCAwIDAgMS0yLjQtMS43IDcuOCA3LjggMCAwIDEtMS4zLTQuNyA4LjggOC44IDAgMCAxIDEuMi01IDQuMSA0LjEgMCAwIDEgMS43LTEuNSA0LjYgNC42IDAgMCAxIDIuMS0uNSA0LjkgNC45IDAgMCAxIDIuMy42bC4yLjJ6bTM3LjQgMTMuOWE5LjQgOS40IDAgMCAxLTMuMy42aC0yLjlsOS4yLTE1Ljd2LS44SDk1LjVWMTVsMi45LTJhNS41IDUuNSAwIDAgMSAyLjYtLjhoMy4ybC05LjQgMTUuNHYxLjJoMTdWMjVhMjQuMyAyNC4zIDAgMCAxLTMuNSAyLjJ6TTM5IDRoLTcuNnMzIDIgMyAzLjFhMTAuOCAxMC44IDAgMCAxLTEuMyA0bC0zLjYgOC41LTUuNi0xNC44aC0uNWwtNS4zIDE1LjQtNC05LjhhOS4zIDkuMyAwIDAgMS0uOS0zLjNjMC0xLjEgMy0zIDMtM0gwczMuNCAyLjIgNC4zIDQuMkwxMy42IDI5aDIuM2w0LjItMTIuM0wyNC40IDI5aDIuMmw4LjUtMjAuOEMzNi4xIDYuMiAzOSA0IDM5IDR6bTQ3LjggNGEzLjQgMy40IDAgMCAwIDMuNC0zLjQgMy40NSAzLjQ1IDAgMSAwLTYuOSAwQTMuNCAzLjQgMCAwIDAgODYuOCA4em0zLjMgMTkuMWE3LjIgNy4yIDAgMCAxLS41LTMuMVYxMC41bC04LjIgMyAyLjUgMlYyNGE3LjkgNy45IDAgMCAxLS40IDMuMSAyLjEgMi4xIDAgMCAxLTEuNi42aC0uMXYuOWgxMHYtMWEyLjEgMi4xIDAgMCAxLTEuNy0uNXoiIGZpbGw9IiMwMENDQTMiLz4KPC9zdmc+Cg==) no-repeat 50%/contain;
        height: 100%;
    }

    .gnb-utils {
        position: absolute;
        top: 0;
        right: 0;
        max-width: 600px;
        vertical-align: top;
    }

    .gnb-user {
        display: inline-block;
        vertical-align: top;
    }

    .gnb-user li {
        display: inline-block;
        height: 56px;
        vertical-align: top;
        text-align: center;
        font-size: 15px;
    }

    .ui-gnb-redirect {
        padding: 0 8px;
        line-height: 56px;
        color: #44484b;
    }


  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
