'use client';

import { defineComponents } from '@tylertech/forge'
import styles from "./page.module.css";

defineComponents();

export default function Home() {
  return (
    <div>
      <forge-scaffold>
        <forge-app-bar slot="header" title-text="Forge React">
          <forge-app-bar-menu-button slot="start"></forge-app-bar-menu-button>
          <forge-app-bar-search slot="center">
            <input type="text" placeholder="Search" />
          </forge-app-bar-search>
          <forge-app-bar-help-button slot="end"></forge-app-bar-help-button>
          <forge-app-bar-notification-button
            slot="end"
          ></forge-app-bar-notification-button>
          <forge-app-bar-app-launcher-button
            slot="end"
            allow-more="true"
          ></forge-app-bar-app-launcher-button>
          <forge-app-bar-profile-button
            slot="end"
            avatar-text="Sean Collins"
            full-name="Sean Collins"
            email="sean.collins@tylertech.com"
          ></forge-app-bar-profile-button>
        </forge-app-bar>
        <forge-drawer slot="body-left">
          <aside>
            <forge-list navlist>
              <forge-list-item selected>
                <forge-icon slot="start" name="authority"></forge-icon>
                <a href="#">Authority</a>
              </forge-list-item>
              <forge-list-item>
                <forge-icon slot="start" name="send"></forge-icon>
                <a href="#">Categories</a>
              </forge-list-item>
              <forge-list-item>
                <forge-icon slot="start" name="drafts"></forge-icon>
                <a href="#">View Types</a>
              </forge-list-item>
              <forge-list-item>
                <forge-icon slot="start" name="send"></forge-icon>
                <a href="#">Sent</a>
              </forge-list-item>
            </forge-list>
          </aside>
        </forge-drawer>
        <main slot="body">
          <forge-banner theme="info">
            This site is heavily under construction. Please bear with us as we assemble the content.
          </forge-banner>
          <forge-card>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <forge-button id="popover-trigger" variant="raised">Show Popover</forge-button>
            <forge-popover
              anchor="popover-trigger"
              placement="bottom"
              position-strategy="fixed"
            >
              <forge-scaffold>
                <forge-toolbar no-border slot="header">
                  <h2 className="forge-typography--heading4" slot="start">Popover Title</h2>
                </forge-toolbar>
                <div
                  slot="body"
                  style={{ width: "300px" }}
                >
                  Popover content
                </div>
                <forge-toolbar no-border slot="footer">
                  <forge-button slot="end" variant="filled">Close</forge-button>
                </forge-toolbar>
              </forge-scaffold>
            </forge-popover>
          </forge-card>

          <forge-card>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <forge-button variant="raised">Show Dialog</forge-button>
            <forge-dialog
              aria-labelledby="dialog-title"
              aria-describedby="dialog-message"
            >
              <forge-scaffold>
                <forge-toolbar slot="header" no-divider>
                  <h1 class="forge-typography--heading4" id="dialog-title" slot="start">
                    Title text
                  </h1>
                  <forge-icon-button slot="end" aria-label="Close dialog">
                    <forge-icon name="close"></forge-icon>
                  </forge-icon-button>
                </forge-toolbar>
                <p slot="body" id="dialog-message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed
                  pariatur error repellendus eos! Quas, optio esse ad illum quis
                  blanditiis rerum quia. Corrupti, ad hic velit praesentium voluptatum
                  dolores?
                </p>
                <forge-toolbar slot="footer" no-divider>
                  <forge-button slot="end" variant="raised">Close</forge-button>
                </forge-toolbar>
              </forge-scaffold>
            </forge-dialog>
          </forge-card>
        </main>
        <forge-footer slot="footer">
          <p>My Footer</p>
        </forge-footer>
      </forge-scaffold>
    </div>
  );
}
