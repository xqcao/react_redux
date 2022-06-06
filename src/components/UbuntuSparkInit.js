import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import sparkpng from "./images/Apache-spark-start-master.png";
import resultImg from "./images/resultpy.png";
const code = `
#Step 1: Install Java Runtime
sudo apt install curl mlocate default-jdk -y

#Step 2: Download Apache Spark
wget https://dlcdn.apache.org/spark/spark-3.2.1/spark-3.2.1-bin-hadoop3.2.tgz

#Extract the Spark tarball.
tar xvf spark-3.2.1-bin-hadoop3.2.tgz

#Move the Spark folder created after extraction to the /opt/ directory.
sudo mv spark-3.2.1-bin-hadoop3.2/ /opt/spark

#Set Spark environment
#Open your bashrc configuration file.
vim ~/.bashrc

#Add:
export SPARK_HOME=/opt/spark
export PATH=$PATH:$SPARK_HOME/bin:$SPARK_HOME/sbin

#Activate the changes.
source ~/.bashrc

#Step 3: Start a standalone master server
start-master.sh

#Step 4: Starting Spark Worker Process
start-slave.sh spark://ubuntu:7077
`;

const pycode = `# pip3 install pyspark
from pyspark.sql import SparkSession
spark=SparkSession.builder.appName('Practise').master("spark://ubuntu:7077").getOrCreate()
df_pyspark=spark.read.csv('test2.csv',header=True,inferSchema=True)
df_pyspark.show()
`;
const UbuntuSparkInit = () => {
  return (
    <div>
      <h2>Ubuntu install Spark and init</h2>
      <CopyBlock
        text={code}
        language={"shell"}
        showLineNumbers={false}
        startingLineNumber={1}
        customStyle={{ width: "50%" }}
        theme={dracula}
        wrapLines
      />
      <div>
        <a href="localhost:8081">View spark master</a>
      </div>
      <img src={sparkpng} alt="sparkmaster" />
      <div>
        <p>pyspark connect to this master:("spark://ubuntu:7077")</p>
        <CopyBlock
          text={pycode}
          language={"python"}
          showLineNumbers={false}
          startingLineNumber={1}
          theme={dracula}
          customStyle={{ width: "50%" }}
          wrapLines
        />
        <div>
          <p>python Result</p>
          <img src={resultImg} alt="py result" width="95%" height="680px" />
        </div>
      </div>
    </div>
  );
};

export default UbuntuSparkInit;
