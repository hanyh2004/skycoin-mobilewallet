import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { WalletsPage } from '../pages/wallets/wallets';

import { File } from '@ionic-native/file';
import { NativeStorage } from '@ionic-native/native-storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalApiProvider } from '../providers/local-api/local-api.provider';
import { WalletProvider } from '../providers/wallet/wallet.provider';
import { IonicStorageModule } from '@ionic/storage';
import { StorageApiProvider } from '../providers/storage-api/storage-api.provider';
import { AddressProvider } from '../providers/address/address.provider';
import { WalletDetailPage } from '../pages/wallet-detail/wallet-detail';
import { SkyPipe } from '../pipes/sky/sky.pipe';
import { SendSkycoinPage } from '../pages/send-skycoin/send-skycoin';
import { ReactiveFormsModule } from '@angular/forms';
import { CounttoDirective } from '../directives/countto/countto';
import { NewWalletPage } from '../pages/new-wallet/new-wallet';
import { BalanceComponent } from '../components/balance/balance';
import { WalletOptionPipe } from '../pipes/wallet-option/wallet-option';

@NgModule({
  declarations: [
    MyApp,
    NewWalletPage,
    SendSkycoinPage,
    SkyPipe,
    WalletDetailPage,
    WalletsPage,
    CounttoDirective,
    BalanceComponent,
    WalletOptionPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewWalletPage,
    SendSkycoinPage,
    WalletDetailPage,
    WalletsPage,
  ],
  providers: [
    File,
    NativeStorage,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalApiProvider,
    WalletProvider,
    StorageApiProvider,
    AddressProvider,
  ]
})
export class AppModule {}
