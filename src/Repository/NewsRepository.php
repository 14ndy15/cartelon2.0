<?php

namespace App\Repository;

use App\Entity\News;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry as RegistryInterface;

/**
 * @method News|null find($id, $lockMode = null, $lockVersion = null)
 * @method News|null findOneBy(array $criteria, array $orderBy = null)
 * @method News[]    findAll()
 * @method News[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NewsRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, News::class);
    }

//    /**
//     * @return News[] Returns an array of News objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('n.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?News
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */



    /**
     * @return News[] Returns an array of PosterEvent objects
     */
    public function orderedByDate($amount)
    {
        return $this->createQueryBuilder('n')
            ->orderBy('n.datetime', 'DESC')
            ->orderBy('n.position', 'DESC')
            ->setMaxResults($amount)
            ->getQuery()
            ->getResult()
            ;
    }

    /**
     * @return News[] Returns an array of PosterEvent objects
     */
    public function findByDateFieldPosition($position, $amount)
    {
        return $this->createQueryBuilder('n')
            ->orderBy('n.position', 'DESC')
            ->addOrderBy('n.datetime', 'DESC')
            ->setMaxResults($amount)
            ->setFirstResult($position)
            ->getQuery()
            ->getResult()
            ;
    }
}
