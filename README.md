# 開発環境の構築

## NodeJSのインストール
### NVMのインストール

```
$ git clone https://github.com/creationix/nvm.git ~/.nvm
```

## Vagrantの設定
Vagrantの共有フォルダ設定を行いホスト上のソースをゲストから参照できるようにする。
共有方式はrsyncとする。→ パフォーマンス及び開発時にHMRを利用できるという条件に最も適合したため。

Vagrantfileの共有設定:
```
  config.vm.synced_folder ".", "/home/vagrant/shared",
    type: "rsync",
    rsync_auto: true,
    owner: "vagrant",
    group: "vagrant",
    rsync__exclude: [".git", "node_modules"]
```

### vagrant-rsync-backプラグインのインストール
Vagrantfileにて`rsync_auto: true`を設定してあるが、この設定だけではホスト→ゲストへの転送しか行わない。
`npm install`等を実施する際はゲスト上でファイルの編集をすることになるのでゲスト→ホストへの転送も必要になる。
これを実現するためにVagrant用のプラグイン｀vagrant-rsync-back`をインストール。

```
vagrant plugin install vagrant rsync-back
```

### 同期の実行
Vagrantfileがあるディレクトリで下記コマンドを実行するとファイル編集時に同期されるようになる。
```
$ vagrant rsync-auto &
```

ゲスト側でファイルを編集時した場合は下記を*都度*実行すること。
```
$ vagrant rsync-back &
```

## ライブラリのインストール