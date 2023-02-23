"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const helmet_1 = require("helmet");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'warn'],
        cors: true,
    });
    app.use((0, helmet_1.default)({
        contentSecurityPolicy: false,
    }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map