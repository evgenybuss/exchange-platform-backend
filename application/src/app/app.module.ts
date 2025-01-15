import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrenciesModule } from '../currencies/currencies.module';
import { EstimatesModule } from '../estimates/estimates.module';
import { ExchangesModule } from '../exchanges/exchanges.module';
import { AuthModule } from '../auth/auth.module';
import { PairsModule } from '../pairs/pairs.module';

@Module({
  imports: [CurrenciesModule, EstimatesModule, ExchangesModule, AuthModule, PairsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
