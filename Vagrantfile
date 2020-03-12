Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.network :private_network, ip: "192.168.33.12"
  
  # NFS越しにファイルを編集した場合HMRが動作しなかったため使用中止
  #config.vm.synced_folder ".", "/home/vagrant/shared", :nfs => true,
  #  mount_options: ['rw', 'vers=3', 'tcp', 'acregmin=2', 'acregmax=2'],
  #  linux__nfs_options: ['rw','no_subtree_check','all_squash','async']

  config.vm.synced_folder ".", "/home/vagrant/shared", 
    type: "rsync", 
    rsync_auto: true,
    owner: "vagrant",
    group: "vagrant",
    rsync__exclude: [".git", "node_modules"]

end
