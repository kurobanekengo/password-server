# 開発環境構築メモ
基本的には`password-client`同様なため、そちらを参照すること。ここでは`password-server`固有の点を記載。

## ts-nodeとtsconfig-pathsについて
server起動は`npm start`でできるようにしてあるため、いったん動作させることができた後はそれ以降、
基本気にする必要はない。とはいえ時間をおいてから何のための設定なのか忘れそうなので備忘録がわりにメモ。

serverは`password-client`と違いブラウザ上ではなくnode上で動作する。そのためwebpackは行わない。
webpackを経由していないためtsconfigによるエイリアス設定を解決していない状態でjsが出力されてしまう。
(`import @api/xxx`等)

tsconfigのエイリアス設定を適用させた状態で動作させるために

- ts-node
- tsconfig-paths

を使用することにした。`npm start`の内容は以下となっている。

```
ts-node -r tsconfig-paths/register source/start.ts
```